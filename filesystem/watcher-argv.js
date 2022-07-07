'use strict'

const fs = require('fs');

try {
    const filename = process.argv[2];
    fs.watch(filename, () => console.log(`File ${filename} changed`));
    console.log(`Now watching ${filename} for changes...`);
} catch (error) {
    console.error(`Operation failed with error code ${error.code}`);
}
