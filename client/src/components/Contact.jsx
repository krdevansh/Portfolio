import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      await axios.post(
        "http://localhost:5000/api/contact",
        form
      )
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="mt-32 px-6 mb-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-4"
      >
        Contact Me
      </motion.h2>

      <p className="text-center opacity-70 mb-12">
        Have a project or opportunity? Let’s talk.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto flex flex-col gap-4
                   bg-white/5 backdrop-blur
                   border border-white/10
                   rounded-2xl p-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-transparent border
                     focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-transparent border
                     focus:outline-none focus:border-blue-500"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          className="p-3 rounded bg-transparent border
                     focus:outline-none focus:border-blue-500 resize-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-4 px-6 py-3 rounded-xl transition
            ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-center mt-2">
            Message sent successfully ✅
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center mt-2">
            Something went wrong ❌ Try again later.
          </p>
        )}

        <p className="text-xs text-center opacity-50 mt-2">
          I usually reply within 24 hours.
        </p>
      </motion.form>
    </section>
  )
}
