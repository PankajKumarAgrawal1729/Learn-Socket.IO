const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log("Socket: ", socket);
    console.log("Socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("Payload: ", payload);
        io.emit("chat", {payload}); // broadcast whatever payload we get
    })
})

// app.listen(5000, () => console.log("Server is Active"));

server.listen(5000, () => console.log("Server is Active..."));