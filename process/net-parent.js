const net = require('net');
const { fork } = require('child_process');
const path = require('path');
const child = fork(path.join(__dirname + '/net-child.js'));

const server = net.createServer();
server.on('connection', socket => {
    socket.end('Parent handled connection');
});

server.listen(8080, () => {
    child.send("Parent passing down server", server);
});