// server.js
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('message', (message) => {
        console.log('Message received:', message);
        // Broadcast the message to all clients
        io.emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
