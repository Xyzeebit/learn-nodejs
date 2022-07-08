'use strict';
const net = require('net');
const fs = require('fs');

try {
    const filename = process.argv[2];
    net.createServer(connection => {
        console.log('Subscriber connected');
        console.log(`Now watching ${filename} for changes...\n`);

        const watcher = fs.watch(filename, () => connection.write(`File changed: ${new Date()}\n`));

        // cleanup
        connection.on('close', () => {
            console.log('Subsciber disconnected');
            watcher.close();
        });
    }).listen(60300, () => console.log('Listening for subscribers...'));
} catch (error) {
    console.log(error.message);
}