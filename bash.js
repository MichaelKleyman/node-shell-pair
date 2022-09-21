const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat');

// output a prompt
process.stdout.write('prompt > ');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ')
};

const process_input = (input) => {
    const args = input.split(' ');
    const command = args[0];
    if(command === 'pwd') {
        pwd(done);
    } 
    else if (command === 'cat') {
        cat(args[1],done);
    }
    else if (command === 'ls') {
        ls(done);
    } else {
        done(input);
    } 
    // else return command;
};

// The stdin 'data' event fire after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remote the newline
    // const output = process_input(cmd);
    process_input(cmd);

    // process.stdout.write(output);
    // process.stdout.write('You typed: ' + cmd);

    // process.stdout.write('\nprompt > ')


});