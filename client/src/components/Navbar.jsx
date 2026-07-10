import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const ROLES = [
  "Full-Stack MERN Developer",
  "Passionate Problem Solver",
  "Chess & Tech Enthusiast",
  "Creative Coder"
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/50 hover:bg-white/10 transition flex flex-col gap-1.5"
        aria-label="Toggle Navigation"
      >
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
      </button>

      {/* Top Center Logo & Animated Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-widest pointer-events-auto hover:scale-105 transition-transform bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-xl">
          <span className="text-blue-500">Kumar </span>Devansh
        </Link>
        
        <div className="h-6 overflow-hidden mt-2 relative w-72 flex justify-center pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute text-xs md:text-sm font-bold text-white/60 tracking-wider whitespace-nowrap uppercase"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            className="fixed top-0 left-0 h-screen w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 z-40 p-8 flex flex-col overflow-y-auto"
          >
            <div className="mt-16 flex flex-col gap-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-bold tracking-wide mb-4">
                <span className="text-blue-500">Kumar </span>Devansh
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:pl-2 transition-all">About</Link>
              <Link to="/education" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:pl-2 transition-all">Education</Link>
              <Link to="/achievements" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:pl-2 transition-all">Achievements</Link>
              <Link to="/certificates" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:pl-2 transition-all">Certificates</Link>
              <Link to="/skills" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:pl-2 transition-all">Skills</Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:pl-2 transition-all">Projects</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:pl-2 transition-all">Contact</Link>
              <div className="w-full h-px bg-white/20 my-2"></div>
              <Link to="/play" onClick={() => setIsOpen(false)} className="font-bold text-blue-400 hover:text-blue-300 transition-all">
                Play chess with me
              </Link>
              <Link to="/music" onClick={() => setIsOpen(false)} className="font-bold text-pink-400 hover:text-pink-300 transition-all mt-2">
                Listen music with me 🎧
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
