const fs = require('fs');

const ls = (done) => {
    // 'files' will be an array of filenames, line ['bash.js', 'pwd.js']
    fs.readdir('./', 'utf8', (err, files) => {
        if(err) {
            done(err);
        } else {
            done(files.join('\n'));
            // process.stdout.write(files.join('\n'));
            // process.stdout.write('\nprompt > ');
        }
    });
};

module.exports = ls;