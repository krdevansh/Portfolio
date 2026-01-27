import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true
  })

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <div
      className={`${
        dark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen w-screen flex flex-col`}
    >
      <Navbar dark={dark} setDark={setDark} />

      <main className="flex-1">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
