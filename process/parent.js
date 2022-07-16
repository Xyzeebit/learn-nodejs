'use-strict';
const cp = require('child_process');
const child = cp.fork(__dirname + '/lovechild.js');

child.on('message', m => {
    console.log('Child said: ' + m); // Parent got a message from child
});
child.send('I love you'); // Parent sends a message to child