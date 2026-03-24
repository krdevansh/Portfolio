import { motion } from "framer-motion"

const certificatesData = [
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory Tools",
    issuer: "Infosys SpringBoard",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1MR66qtEU2Uazmtzklk43Tw1FVG0RLPVT/view",
    icon: "📜"
  },
  {
    title: "Fundamentals of Network Communications",
    issuer: "Coursera",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/14ld4b7JZl_u0SlsbsyRK-IS_kOKlsCwZ/view",
    icon: "🌐"
  },
  {
    title: "Responsive Web Design",
    issuer: "Free Code Camp",
    date: "Nov 2023",
    link: "https://drive.google.com/file/d/1qZirmTJrdoNGKdqA6dmcfnV7Js5kgGaw/view",
    icon: "💻"
  }
]

export default function Certificates() {
  return (
    <section className="py-32 px-6 w-full max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-600/30 blur-[80px] rounded-full pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
          Certificates.
        </h2>
        <p className="opacity-60 max-w-2xl mx-auto text-lg">
          Continuous learning and professional development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center text-center shadow-xl group"
          >
            <div className="text-5xl mb-6 p-4 rounded-full bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
              {cert.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 flex-1">{cert.title}</h3>
            <p className="text-white/60 mb-6 font-medium tracking-wide text-sm">{cert.issuer}</p>
            
            <div className="w-full flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
              <span className="text-xs font-bold tracking-widest opacity-50 uppercase">{cert.date}</span>
              <a href={cert.link} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs font-semibold hover:bg-white hover:text-black transition-colors pointer-events-auto">
                View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
