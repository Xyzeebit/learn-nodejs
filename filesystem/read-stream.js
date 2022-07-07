'use strict'
const fs = require('fs');

try {
    fs.createReadStream(process.argv[2])
        .on('data', chunk => process.stdout.write(chuck))
        .on('error', error => process.stderr.write(`Error: ${error.message}\n`));
} catch (error) {
    process.stderr.write(`Error: ${error.message}`);
}