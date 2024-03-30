//create we server
const express = require('express');
const app = express();
//create a server
const http = require('http');
const server = http.createServer(app);
//create a socket
const { Server } = require('socket.io');
const io = new Server(server);
//create a path
const path = require('path');
const PORT = process.env.PORT || 3000;
//create a static file
app.use(express.static(path.join(__dirname, 'public')));
//create a connection
io.on('connection', (socket) => {
    console.log('a user connected');
    //create a comment
    socket.on('comment', (comment) => {
        io.emit('comment', comment);
    });
});
//create a server
server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
