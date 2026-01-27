const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

// CREATE APP FIRST
const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// CONNECT MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB error:", err))

// MODELS
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

const Message = mongoose.model(
  "Message",
  new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
)

// ROUTES
app.get("/", (req, res) => {
  res.send("Backend running 🚀")
})

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find()
  res.json(projects)
})

app.post("/api/contact", async (req, res) => {
  const message = new Message(req.body)
  await message.save()
  res.json({ success: true })
})

// START SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
