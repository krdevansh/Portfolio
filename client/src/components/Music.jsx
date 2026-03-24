import { motion } from "framer-motion"

export default function Music() {
  return (
    <section className="py-32 px-6 w-full max-w-5xl mx-auto flex flex-col items-center min-h-[80vh] relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-600/20 blur-[80px] rounded-full pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
          My Playlist.
        </h2>
        <p className="opacity-60 max-w-2xl mx-auto text-lg leading-relaxed">
          The music that fuels my coding sessions and helps me unwind. 🎧
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl p-4 group relative"
      >
        {/* Animated Glow Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/videoseries?list=PL9bw4S5ePsEGpT9PdWJYN8joMa2eWAxJf"
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </section>
  )
}
