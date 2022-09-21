const fs = require('fs');

const cat = (fileName) => {
    const fileContents = fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(content);
            process.stdout.write('\nprompt >');
        }
    });
}

module.exports = cat;