import { useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"

const API = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? "" : "http://localhost:5001")

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      await axios.post(`${API}/api/contact`, form)
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("Contact API error:", err)
      setStatus("error")
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(""), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 w-full max-w-4xl mx-auto relative z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-black mb-4 tracking-tight">Let's Connect</h2>
        <p className="opacity-60 text-lg">Have a project in mind or want to explore opportunities? Drop a message below.</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex flex-col gap-6 p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-white/70 ml-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-white/20"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-white/70 ml-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-white/20"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <label className="text-sm font-semibold tracking-wide text-white/70 ml-1">Message</label>
          <textarea
            name="message"
            placeholder="How can I help you?"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none placeholder-white/20"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`relative z-10 mt-4 px-8 py-4 rounded-xl font-bold tracking-wide transition-all overflow-hidden group ${
            loading ? "opacity-70 cursor-not-allowed bg-blue-600/50" : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-emerald-400 text-center font-medium mt-2 absolute bottom-2 left-1/2 -translate-x-1/2 w-full"
            >
              Message received. I'll get back to you soon! ✨
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-center font-medium mt-2 absolute bottom-2 left-1/2 -translate-x-1/2 w-full"
            >
              Failed to send. Please try again later. ❌
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  )
}