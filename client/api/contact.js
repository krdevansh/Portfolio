import mongoose from "mongoose";

let isConnected = false;

const Message = mongoose.models.Message || mongoose.model(
  "Message",
  new mongoose.Schema({
    name: String, email: String, message: String,
    createdAt: { type: Date, default: Date.now }
  })
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://portfolioUser:kumar.12324506@portfolio-cluster.vmvm2x4.mongodb.net/portfolio?appName=portfolio-cluster");
      isConnected = true;
    }
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ msg: "All fields required" });
      }
      await Message.create({ name, email, message });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ msg: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
