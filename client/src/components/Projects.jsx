import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

const API = import.meta.env.VITE_API_URL

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

useEffect(() => {
  axios
    .get(`${API}/api/projects`)
    .then((res) => {
      const data = Array.isArray(res.data)
        ? res.data
        : res.data.projects || []

      setProjects(data)
      setLoading(false)
    })
    .catch(() => {
      setProjects([])
      setLoading(false)
    })
}, [])


  if (loading) {
    return (
      <section className="mt-32 text-center">
        <p className="opacity-70 animate-pulse">
          Fetching projects…
        </p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="mt-32 text-center">
        <p className="text-red-400">
          Failed to load projects.
        </p>
      </section>
    )
  }

  if (!projects.length) {
    return (
      <section className="mt-32 text-center">
        <p className="opacity-70">
          No projects added yet.
        </p>
      </section>
    )
  }

  return (
    <section id="projects" className="mt-32 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">
        Projects
      </h2>

      <p className="text-center opacity-70 max-w-xl mx-auto mb-14">
        Real-world full-stack applications built with MERN,
        focusing on performance, scalability, and UX.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl p-6
                       border border-white/10
                       bg-white/5 backdrop-blur
                       hover:-translate-y-2
                       hover:shadow-2xl
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2
                           group-hover:text-blue-500 transition">
              {project.title}
            </h3>

            <p className="opacity-80 leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech?.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full
                             bg-white/10 border border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-lg
                             border hover:bg-white
                             hover:text-black transition"
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-lg
                             bg-blue-600 text-white
                             hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
