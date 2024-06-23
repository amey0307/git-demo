const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});