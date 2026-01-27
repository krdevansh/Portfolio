import { useEffect, useState } from "react"
import axios from "axios"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="mt-32 text-center">
        <p className="opacity-70">Loading projects...</p>
      </section>
    )
  }

  return (
    <section id="projects" className="mt-32 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project._id || project.id}
            className="group border rounded-2xl p-6 transition-all
                       hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold transition
                           group-hover:text-blue-500">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-3 opacity-80 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border opacity-80"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg border transition
                             hover:bg-black hover:text-white"
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg border transition
                             hover:bg-black hover:text-white"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
