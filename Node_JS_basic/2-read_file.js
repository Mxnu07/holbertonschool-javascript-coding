const fs = require('fs');

function countStudents(path) {
  try {

    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() !== '');

    const numberOfStudents = lines.length;

    const counts = {};
    lines.forEach(line => {
        const fields = line.split(',');
        const field = fields[fields.length - 1].trim();
        if (counts[field]) {
            counts[field]++;
        } else {
            counts[field] = 1;
        }
    });

    console.log(`Number of students: ${numberOfStudents}`);

    for (const field in counts) {
        const studentList = lines.filter(line => line.trim().endsWith(field)).map(line => line.split(',')[0]);
        console.log(`Number of students in ${field}: ${counts[field]}. List: ${studentList.join(', ')}`);
    }
} catch (error) {
    throw new Error('Cannot load the database');
}
}

module.exports = countStudents;
