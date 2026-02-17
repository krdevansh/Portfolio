import { motion } from "framer-motion"

export default function Navbar({ dark, setDark }) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50
                 backdrop-blur bg-black/60 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold tracking-wide">
          Kumar <span className="text-blue-500">Devansh</span>
        </h1>

        <div className="flex items-center gap-6">
          <a href="#projects" className="opacity-80 hover:opacity-100 transition">
            Projects
          </a>
          <a href="#contact" className="opacity-80 hover:opacity-100 transition">
            Contact
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-full border
                       flex items-center justify-center
                       hover:bg-white hover:text-black transition"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
