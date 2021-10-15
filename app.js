const express = require("express");
const server = express();
const PORT = 3000;
const { Server } = require("socket.io");
const io = new Server(server);

server.listen(PORT, () => {
    console.log(`server listinging at port ${PORT}`);
});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.get("/", (req, res) => {
    res.send({ message: "hello world" });
});