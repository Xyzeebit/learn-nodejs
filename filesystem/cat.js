'use strict';

const fs = require('fs');

try {
    fs.createReadStream(process.argv[2]).pipe(process.stdout);
} catch (error) {
    console.log('Operation failed', error.toString());
}