import { motion } from "framer-motion"

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    duration: "Aug 2023 – Present",
    score: "CGPA: 7.01",
    icon: "🎓"
  },
  {
    institution: "St. John Secondary School",
    location: "Dumraon, Bihar",
    degree: "Intermediate (PCM)",
    duration: "Apr 2019 – May 2021",
    score: "Percentage: 78%",
    icon: "🏫"
  },
  {
    institution: "Cambridge School",
    location: "Dumraon, Bihar",
    degree: "Matriculation",
    duration: "Apr 2018 – May 2019",
    score: "Percentage: 84%",
    icon: "📚"
  }
]

export default function Education() {
  return (
    <section className="py-32 px-6 w-full max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/30 blur-[80px] rounded-full pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
          My Education.
        </h2>
        <p className="opacity-60 max-w-2xl mx-auto text-lg">
          My academic journey and qualifications that built my foundational knowledge.
        </p>
      </motion.div>

      <div className="relative border-l border-white/20 ml-4 md:ml-8 space-y-12 pb-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative pl-10 md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-white/10 border-4 border-[#0f172a] shadow-lg flex items-center justify-center text-xl z-20 backdrop-blur-md">
              <span className="opacity-80">{edu.icon}</span>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                    {edu.institution}
                  </h3>
                  <p className="text-white/60 font-medium text-sm mt-1">{edu.location}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/10 text-xs font-semibold tracking-widest text-white/80 whitespace-nowrap">
                  {edu.duration}
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">{edu.degree}</h4>
              <p className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-semibold text-sm border border-emerald-500/20">
                {edu.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
