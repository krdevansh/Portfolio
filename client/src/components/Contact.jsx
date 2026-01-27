import { useState } from "react"
import axios from "axios"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      await axios.post("http://localhost:5000/api/contact", form)
      setStatus("Message sent successfully ✅")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("Something went wrong ❌")
    }
  }
return (
  <section className="mt-32 px-8 mb-32">
    <h2 className="text-4xl font-bold text-center mb-12">
      Contact Me
    </h2>

    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 border rounded bg-transparent focus:outline-none"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 border rounded bg-transparent focus:outline-none"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows="5"
        className="p-3 border rounded bg-transparent focus:outline-none"
        required
      />

      <button
        type="submit"
        className="mt-4 px-6 py-3 border rounded transition
          hover:bg-black hover:text-white"
      >
        Send Message
      </button>

      {status && (
        <p className="text-center mt-4">{status}</p>
      )}
    </form>
  </section>
)

}
