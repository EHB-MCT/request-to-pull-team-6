const express = require("express");
const server = express();
const PORT = 3000;
const {
    Server
} = require("socket.io");
const io = new Server(server);

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.get('/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/script.js'));
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

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
    res.send({
        message: "hello world"
    });
});