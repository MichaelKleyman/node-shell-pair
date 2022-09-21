const pwd = (done) => {
    done(process.cwd());
    // process.stdout.write(process.cwd());
    // process.stdout.write('\nprompt > ')
};

module.exports = pwd;