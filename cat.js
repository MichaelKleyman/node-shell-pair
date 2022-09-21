const fs = require('fs');

const cat = (fileName, done) => {
    const fileContents = fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            done(err);
            // throw err;
        } else {
            done(content);
            // process.stdout.write(content);
            // process.stdout.write('\nprompt >');
        }
    });
}

module.exports = cat;