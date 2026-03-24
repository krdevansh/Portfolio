import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

// Using relative URL for Vercel serverless deployment, or fallback to dev server
const API = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? "" : "http://localhost:5001")

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API}/api/projects`)
        const data = Array.isArray(res.data) ? res.data : res.data?.projects || []
        setProjects(data)
        setError(false)
      } catch (err) {
        console.error("Projects API error:", err)
        setProjects([])
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className="py-32 w-full text-center">
        <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        <p className="opacity-70 mt-4 tracking-widest uppercase text-sm">Loading Projects...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-32 w-full text-center">
        <div className="inline-block px-6 py-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
          <p className="font-semibold">Backend Connection Failed</p>
          <p className="text-sm opacity-80 mt-1">Unable to load projects from the database.</p>
        </div>
      </section>
    )
  }

  if (!projects.length) {
    return (
      <section className="py-32 w-full text-center opacity-50">
        <p className="text-xl tracking-widest uppercase">No projects found</p>
      </section>
    )
  }

  return (
    <section id="projects" className="py-32 px-6 w-full max-w-7xl mx-auto relative z-10">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/30 blur-[80px] rounded-full pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
          Featured Work.
        </h2>
        <p className="opacity-60 max-w-2xl mx-auto text-lg">
          A showcase of full-stack implementations, exploring architecture, performance, and beautifully crafted user interfaces.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project._id || index}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl overflow-hidden"
          >
            {/* Glowing orb behind the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed mb-8 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold tracking-wider rounded-md border border-white/5 bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-white/10 mt-auto relative z-10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black font-semibold text-sm transition-all active:scale-95"
                >
                  Source Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/80 transition-all active:scale-95"
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