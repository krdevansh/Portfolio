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
      await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://portfolioUser:kumar.12324506@portfolio-cluster.vmvm2x4.mongodb.net/portfolio?appName=portfolio-cluster");
      isConnected = true;
    }
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ msg: "Failed to fetch projects" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
