'use-strict';
const cp = require('child_process');
const child = cp.fork(__dirname + './lovechild.js');

child.on('message', m => {
    console.log('Child said: ' + m);
});
child.send('I love you');