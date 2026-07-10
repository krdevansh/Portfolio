import mongoose from "mongoose";

let isConnected = false;

const Project = mongoose.models.Project || mongoose.model(
  "Project",
  new mongoose.Schema({
    title: String,
    description: String,
    tech: [String],
    github: String,
    live: String,
  })
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://portfolio_render:<db_password>@cluster0.3amnctv.mongodb.net/My-portfolio?retryWrites=true&w=majority");
      isConnected = true;
    }
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      console.error("Projects API error:", err);
      res.status(500).json({ msg: "Failed to fetch projects" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
