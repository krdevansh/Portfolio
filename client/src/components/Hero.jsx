import { motion } from "framer-motion"
import profile from "../assets/Profilepic.png"

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div
        className="flex flex-col md:flex-row items-center
                   gap-12 max-w-6xl text-center md:text-left"
      >
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="relative flex items-center justify-center"
>
  {/* Animated background ring */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    className="absolute w-60 h-60 md:w-72 md:h-72
               rounded-full bg-gradient-to-r
               from-blue-500 via-purple-500 to-pink-500
               blur-xl opacity-40"
  />

  {/* Profile Image */}
  <motion.img
    src={profile}
    alt="Devansh profile"
    whileHover={{
      scale: 1.06,
      rotate: 1,
      boxShadow: "0px 20px 40px rgba(59,130,246,0.35)",
    }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.4 }}
    className="relative z-10
               w-44 h-44 md:w-64 md:h-64
               rounded-full object-cover
               border-4 border-blue-500
               cursor-pointer"
  />
</motion.div>


        {/* TEXT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I’m <span className="text-blue-500">Devansh</span> <br />
            Full-Stack MERN Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg max-w-xl opacity-80"
          >
            I build scalable, secure, and user-friendly web applications
            using React, Node.js, MongoDB, and modern UI practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-6 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600
                         text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border
                         hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
