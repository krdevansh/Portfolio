require("dotenv").config({ path: __dirname + '/.env' });
const mongoose = require("mongoose");

async function testMongo() {
  console.log("Testing connection to: " + process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    console.log("SUCCESS");
    process.exit(0);
  } catch (err) {
    console.error("FAIL", err.message);
    process.exit(1);
  }
}
testMongo();
