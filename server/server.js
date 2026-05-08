import express from "express";
import http from "http";
import ENV from "./src/config/dotenv.config.js";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.get("/", (req, res) => {
  return res.json({ message: "Welcome to the chat app server!" });
});



server.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
