'use-strict';
const { fork } = require('child_process');
const child = fork(__dirname + '/lovechild.js');

child.on('message', m => {
    console.log('Child said: ' + m); // Parent got a message from child
});
child.send('I love you'); // Parent sends a message to child