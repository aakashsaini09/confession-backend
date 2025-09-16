// index.js
import express from "express";
import { createServer } from "http";
import initSocket from "./src/socket.js";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 8000; // ✅ use Railway's port

// Create an HTTP server
const httpServer = createServer(app);

// Initialize socket.io
initSocket(httpServer);

app.get("/", (req, res) => {
  console.log("Hello this msg for console");
  res.send("✅ Node.js + Socket.io server is running!");
});

httpServer.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
