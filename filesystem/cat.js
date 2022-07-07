#!/usr/bin/env node
'use strict';

const fs = require('fs');

try {
    fs.createReadStream(process.argv[2]).pipe(process.stdout);
} catch (error) {
    process.stderr.write(error.toString());
}