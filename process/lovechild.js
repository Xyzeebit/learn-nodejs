'use strict';

process.on('message', m => {
    console.log('Parent said:', m); // child got a message down from the parent
    process.send('I love you too'); // send a message up to your parent
})