// index.js
import express from "express";
import { createServer } from "http";
import initSocket from './src/socket.js'

const app = express();
app.use(cors())
const port = 8000;

// Create an HTTP server
const httpServer = createServer(app);

// Initialize socket.io
initSocket(httpServer);

app.get("/", (req, res) => {
  console.log("Hello this msg for console");
  res.send("Hello World!");
});

httpServer.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
