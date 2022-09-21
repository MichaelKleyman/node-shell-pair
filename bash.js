const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat');

// output a prompt
process.stdout.write('prompt > ');

const process_input = (input) => {
    const args = input.split(' ');
    const command = args[0];
    if(command === 'pwd') {
        pwd();
    } 
    else if (command === 'cat') {
        cat(args[1]);
    }
    else if (command === 'ls') {
        ls();
    } else {
        process.stdout.write(input);
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