const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;
const filePath = path.join(__dirname, 'file.txt');

app.use(express.static(path.join(__dirname, 'src')));

fs.watch(filePath, (eventType) => {
    if (eventType === 'change') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            io.emit('file-changed', data);
        });
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        socket.emit('file-changed', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
