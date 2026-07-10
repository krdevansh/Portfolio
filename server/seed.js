require("dotenv").config({ path: __dirname + '/.env' })
const mongoose = require("mongoose")

// Define the Project Schema
const Project = mongoose.model(
  "Project",
  new mongoose.Schema({
    title: String,
    description: String,
    tech: [String],
    github: String,
    live: String,
  })
)

// Add your projects here!
const projectsToSeed = [
  {
    title: "Personal Portfolio Website",
    description: "A premium, dynamic full-stack portfolio built with React, Vite, Framer Motion, and Node.js. Displays featured work, connects to MongoDB, and includes a playable mini chess bot.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Framer Motion"],
    github: "https://github.com/krdevansh/portfolio",
    live: "https://portfolio-fixs.vercel.app/"
  },
  {
    title: "VibeStage",
    description: "A real-time audience engagement platform enabling presenters to interact with users, run live polls, and receive emoji reactions during live events.",
    tech: ["React", "Node.js", "Express", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/krdevansh/vibestage",
    live: ""
  },
  {
    title: "DQMS (Departmental Queue Management System)",
    description: "A digital queue management and ticketing platform designed to streamline departmental workflows, track queue statuses, and optimize service wait times.",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    github: "https://github.com/krdevansh/dqms",
    live: ""
  },
  {
    title: "To-Do App",
    description: "A modern, responsive tasks management application featuring categorizations, deadline tracking, task priorities, and local storage state persistence.",
    tech: ["React", "Vite", "CSS", "LocalStorage"],
    github: "https://github.com/krdevansh/to-do-app",
    live: ""
  },
  {
    title: "AI Investment Agent",
    description: "An intelligent portfolio analyst utilizing AI models to evaluate financial opportunities, generate market trends analysis, and suggest allocations.",
    tech: ["Python", "OpenAI API", "React", "Node.js", "MongoDB"],
    github: "https://github.com/krdevansh/ai-investment-agent",
    live: ""
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "An interactive, beautifully styled classic Tic-Tac-Toe game featuring player vs. player local play and an integrated intelligent bot opponent.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/krdevansh/Tic-tac-to",
    live: ""
  }
]

async function seedDatabase() {
  console.log("Connecting to: " + process.env.MONGO_URI)
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB ✅")

    // Clear existing projects to avoid duplicates
    await Project.deleteMany({})
    console.log("Cleared old projects 🗑️")

    // Insert new projects
    await Project.insertMany(projectsToSeed)
    console.log("Successfully seeded new projects! 🎉")

    process.exit(0)
  } catch (err) {
    console.error("Seeding failed ❌", err)
    process.exit(1)
  }
}

seedDatabase()
