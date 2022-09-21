const fs = require('fs');

const ls = () => {
    // 'files' will be an array of filenames, line ['bash.js', 'pwd.js']
    fs.readdir('./', 'utf8', (err, files) => {
        if(err) {
            throw err;
        } else {
            process.stdout.write(files.join('\n'));
            process.stdout.write('\nprompt > ');
        }
    });
};

module.exports = ls;