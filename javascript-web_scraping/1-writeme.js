#!/usr/bin/node
const fs = require('fs');

function writeStringToFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('An error occurred:', err);
        } else {
            console.log(`Content successfully written to ${filePath}`);
        }
    });
}

if (process.argv.length !== 4) {
    console.log('Usage: node script.js <file_path> <content>');
} else {
    const filePath = process.argv[2];
    const content = process.argv[3];
    writeStringToFile(filePath, content);
}
