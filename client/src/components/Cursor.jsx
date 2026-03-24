import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const updateHoverState = (e) => {
      const target = e.target
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      
      setIsHovering(isClickable)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", updateHoverState)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", updateHoverState)
    }
  }, [])

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[9999] mix-blend-exclusion hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "transparent"
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 25,
          mass: 0.1
        }}
      />
    </>
  )
}
