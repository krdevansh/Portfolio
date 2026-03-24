import { motion } from "framer-motion"
import Profilepic from "../assets/Profilepic.png"

export default function About() {
  return (
    <section id="about" className="py-32 px-6 w-full max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6">
          About Me.
        </h2>
        <p className="opacity-60 max-w-2xl mx-auto text-lg">
          My journey, skills, and goals as a passionate software engineer.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center space-y-20">
        
        {/* Centered Circular Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-64 h-64 md:w-80 md:h-80 mt-8 flex items-center justify-center group"
        >
          {/* Pulsing glows */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse pointer-events-none" />
          
          {/* Animated dashed ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border-2 border-dashed border-blue-400/30 rounded-full pointer-events-none"
          />
          
          {/* Animated orbital ring with satellites */}
          <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
           className="absolute -inset-12 border border-purple-500/20 rounded-full flex items-center justify-center pointer-events-none"
          >
             <div className="absolute top-0 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_#60a5fa]" />
             <div className="absolute bottom-12 left-4 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_#c084fc]" />
             <div className="absolute top-1/2 -right-2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
          </motion.div>

          {/* Actual Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10 bg-black/40">
            <img 
               src={Profilepic} 
               alt="My Profile" 
               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-4 bg-white/[0.08] backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full shadow-xl z-20"
          >
            <div className="text-sm font-bold tracking-widest text-blue-400 uppercase">MERN Stack</div>
          </motion.div>
        </motion.div>

        {/* About Bio Text Centered Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center flex flex-col gap-6 text-white/80 leading-relaxed text-lg font-light relative"
        >
          <div className="absolute -inset-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />
          
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
            I am a highly motivated Computer Science student with a strong foundation in Data Structures, Algorithms, and full-stack development. I specialize in the MERN stack, continually driven to build scalable, real-world applications that solve complex problems.
          </p>

          <p>
            My journey began with C++, establishing a solid grasp of object-oriented design before expanding deeply into problem-solving techniques. Today, I bring these logical foundations into creating responsive, interactive user interfaces with modern web technologies, backed by robust APIs, secure authentication, and well-structured database designs.
          </p>

          <p>
            Beyond writing clean, maintainable code, I have a deep appreciation for core CS principles—Operating Systems, DBMS, and Computer Networks. I believe these fundamentals, coupled with a disciplined daily commitment to learning, are essential for engineering reliable software systems and growing as a well-rounded developer.
          </p>
          
          <div className="p-8 mt-8 rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-sm relative overflow-hidden inline-block mx-auto text-center w-full shadow-lg">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
            <p className="text-white italic relative z-10">
              "My long-term goal is to become a skilled software engineer capable of building impactful products and contributing to high-performing teams. I am always open to learning new technologies, taking on challenging problems, and collaborating on innovative ideas."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hobbies Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-24 pt-16 border-t border-white/10 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
          My Hobbies
        </h3>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[80px] rounded-full pointer-events-none -z-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                emoji: "♟️",
                title: "Chess",
                desc: "Sharpening my strategic thinking, tactical foresight, and logical problem-solving."
              },
              {
                emoji: "🎵",
                title: "Music",
                desc: "My ultimate escape to unwind, relax, and stay inspired through various genres."
              },
              {
                emoji: "🎸",
                title: "Guitar",
                desc: "Expressing creativity and finding rhythm outside of writing lines of code."
              },
              {
                emoji: "🏏",
                title: "Cricket",
                desc: "Staying active, energized, and embracing the true value of teamwork and dedication."
              }
            ].map((hobby, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col items-center text-center shadow-lg transition-colors hover:bg-white/10"
              >
                <div className="text-4xl mb-4">{hobby.emoji}</div>
                <h4 className="text-xl font-bold text-white mb-2">{hobby.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{hobby.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
