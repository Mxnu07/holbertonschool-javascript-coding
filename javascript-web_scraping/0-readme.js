#!/usr/bin/node
const fs = require('fs');

// Provide the file path as the first argument when running the script
const filePath = process.argv[2];

// Check if the file path is provided as an argument
if (!filePath) {
  console.error('Please provide the file path as the first argument.');
  process.exit(1); // Exit with error code 1
}

// Read the file asynchronously
fs.readFile(filePath, 'utf-8', (err, data) => {
  // Check if an error occurred
  if (err) {
    console.error('An error occurred while reading the file:', err);
    return; // Exit the callback function
  }

  // Print the file content
  console.log(data);
});
