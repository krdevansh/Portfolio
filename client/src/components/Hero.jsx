import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const THEMES = [
  { id: "theme-dark", label: "Dark Space", color: "bg-[#0f172a]" },
  { id: "theme-light", label: "Clean Light", color: "bg-[#f8fafc]" },
  { id: "theme-purple", label: "Midnight Purple", color: "bg-[#581c87]" },
  { id: "theme-ocean", label: "Deep Ocean", color: "bg-[#0369a1]" },
  { id: "theme-forest", label: "Forest Green", color: "bg-[#065f46]" },
]

export default function Hero() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme-dark")
  const [showThemes, setShowThemes] = useState(false)

  useEffect(() => {
    const root = document.documentElement;
    THEMES.forEach(t => root.classList.remove(t.id));
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <div className="w-full flex flex-col">
      <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
        
        {/* Theme Switcher Menu */}
        <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-2">
          <button 
            onClick={() => setShowThemes(!showThemes)}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xl text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <span>Theme</span>
            <span className="text-lg">🎨</span>
          </button>
          
          <AnimatePresence>
            {showThemes && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="flex items-center gap-2 p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl"
              >
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id)
                      setShowThemes(false)
                    }}
                    title={t.label}
                    className={`w-6 h-6 rounded-full transition-all border border-black/20 dark:border-white/20 shadow-inner ${t.color} ${theme === t.id ? "ring-2 ring-blue-500 scale-125" : "opacity-70 hover:opacity-100 hover:scale-110"}`}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center px-6 max-w-4xl pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-blue-400"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-tight"
        >
          Building <br/>
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 text-transparent bg-clip-text">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-xl md:text-2xl opacity-60 max-w-2xl mx-auto leading-relaxed"
        >
          I'm Kumar Devansh. A Full-Stack MERN Developer dedicated to crafting performant, scalable, and visually stunning web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/projects"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95"
          >
            Explore My Work
          </Link>
          
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold tracking-wide hover:bg-white/10 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Let's Talk</span>
            <span className="opacity-50">→</span>
          </Link>
        </motion.div>
      </div>
      </section>

      {/* Extended Features Section */}
      <section className="py-32 px-6 w-full max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
            Core Expertise.
          </h2>
          <p className="opacity-60 max-w-2xl mx-auto text-lg">
            Delivering end-to-end solutions with modern architectures, focusing on scalable backend systems and immersive user interfaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              description: "Crafting beautiful, responsive, and highly interactive user interfaces using React, Tailwind CSS, and Framer Motion.",
              icon: "🎨"
            },
            {
              title: "Backend Engineering",
              description: "Building robust RESTful APIs, scalable architectures, and real-time systems using Node.js, Express, and modern databases.",
              icon: "⚙️"
            },
            {
              title: "Problem Solving",
              description: "Designing efficient algorithms, optimizing application performance, and ensuring a bug-free, seamless experience.",
              icon: "🧩"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-start shadow-xl transition-colors hover:bg-white/10"
            >
              <div className="text-4xl mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
