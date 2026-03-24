import { motion } from "framer-motion"

const achievementsData = [
  {
    title: "Hackathon - Code-a-Haunt",
    description: "Successfully participated and collaborated under intense time constraints to solve technical challenges.",
    date: "Mar 2024",
    category: "Hackathon",
    icon: "🏆",
    link: "https://drive.google.com/file/d/1X-Qesfv1YZWKNJrIM7_UDh7BT2nG3vRz/view"
  },
  {
    title: "Fundamentals of Data Structures Training",
    description: "Completed intensive training at the Centre of Professional Enhancement (LPU), implementing core generic algorithms and optimizing solutions for complex problems in C++.",
    date: "Jun 2025 – Jul 2025",
    category: "Professional Training",
    icon: "🧠",
    link: "https://drive.google.com/file/d/1RDTTsf_kSTy7qdU33_D2h_YcL5QOTsux/view"
  }
]

export default function Achievements() {
  return (
    <section className="py-32 px-6 w-full max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/30 blur-[80px] rounded-full pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
          Achievements.
        </h2>
        <p className="opacity-60 max-w-2xl mx-auto text-lg">
          Milestones, trainings, and hackathons that have shaped my technical journey.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {achievementsData.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-md shadow-xl hover:border-white/20 transition-colors"
          >
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl flex-shrink-0 shadow-inner">
              {ach.icon}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col flex-wrap md:flex-row items-center md:justify-between gap-4 mb-3">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                  {ach.title}
                </h3>
                <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-semibold tracking-widest text-white/70 whitespace-nowrap">
                  {ach.date}
                </span>
              </div>
              <p className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-amber-500/80 uppercase mb-4 border border-amber-500/20 rounded-md bg-amber-500/10">
                {ach.category}
              </p>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                {ach.description}
              </p>
              
              {ach.link && (
                <a href={ach.link} target="_blank" rel="noreferrer" className="inline-block mt-6 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-xs font-semibold hover:bg-white hover:text-black transition-colors">
                  View Credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
