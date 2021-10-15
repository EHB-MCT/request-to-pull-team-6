const express = require("express");
const server = express();
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server listinging at port ${PORT}`);
});

server.get("/", (req, res) => {
    res.send({ message: "hello world" });
});