import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Certificates from "./components/Certificates"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Play from "./components/Play"
import Music from "./components/Music"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"

export default function App() {
  return (
    <div className="bg-transparent text-white min-h-screen w-screen flex flex-col relative">
      <Cursor />
      <Navbar dark={true} />

      <main className="flex-1 w-full flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/play" element={<Play />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
