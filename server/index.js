const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const http = require("http")
const { Server } = require("socket.io")
require("dotenv").config({ path: __dirname + '/.env' })

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*", // allow frontend access
    methods: ["GET", "POST"]
  }
})

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => {
  console.error("MongoDB connection error:", err)
})

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

app.get("/", (req, res) => {
  res.send("Backend running 🚀")
})

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Failed to fetch projects" })
  }
})

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields required" })
    }

    await Message.create({ name, email, message })
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
})

io.on("connection", (socket) => {
  console.log("New chess client connected:", socket.id)
  
  socket.on("join-room", (roomId) => {
    socket.join(roomId)
    console.log(`Socket ${socket.id} joined room ${roomId}`)
  })

  socket.on("move", ({ roomId, move }) => {
    // Broadcast the move to everyone else in the room
    socket.to(roomId).emit("move", move)
  })

  socket.on("disconnect", () => {
    console.log("Chess client disconnected:", socket.id)
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
