'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;

try {
    const filename = process.argv[2];
    fs.watch(filename, () => {
        const ls = spawn('ls', ['-l', '-h', filename]);
        ls.stdout.pipe(process.stdout);
    });
    console.log(`Now watching ${filename} for changes...`);
} catch (error) {
    console.log(`Operation failed with error code ${error.code}`);
}