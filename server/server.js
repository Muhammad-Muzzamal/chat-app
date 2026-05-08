import express from "express";
import http from "http";
import ENV from "./src/config/dotenv.config.js";

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to the chat app server!" });
});

server.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
