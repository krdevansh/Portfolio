import { motion } from "framer-motion"

const skills = [
  { name: "JavaScript", icon: "🚀" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "Git", icon: "🐙" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" }
]

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <p className="text-lg opacity-60">Technologies I work with to build scalable applications</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-medium tracking-wide text-white/90">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
