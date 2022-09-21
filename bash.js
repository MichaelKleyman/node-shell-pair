const pwd = require('./pwd.js');
const ls = require('./ls.js')

// output a prompt
process.stdout.write('prompt > ');

const process_input = (command) => {
    if(command === 'pwd') {
        pwd();
    } else if (command === 'ls') {
        ls();
    } else {
        process.stdout.write(command);
        process.stdout.write('\nprompt > ')
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