// src/socket.js
import { Server as SocketIOServer } from "socket.io";

let liveUsers = 0;

export default function initSocket(httpServer) {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*",          // for testing, allow all
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    liveUsers++;
    console.log("✅ User connected:", socket.id);

    io.emit("users-count", liveUsers);

    socket.on("chat-message", (text) => {
      const message = { id: socket.id, text };
      console.log("💬 Message:", message);
      io.emit("chat-message", message);
    });

    socket.on("disconnect", () => {
      liveUsers--;
      console.log("❌ User disconnected:", socket.id);
      io.emit("users-count", liveUsers);
    });
  });

  console.log("🚀 Socket.io server started");
}
