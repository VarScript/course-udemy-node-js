const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What want make?',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. List task'
            },
            {
                value: '3',
                name: '3. List completed task'
            },
            {
                value: '4',
                name: '4. List pending task'
            },
            {
                value: '5',
                name: '5. Completed task'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            },
            
        ]
    }
];



const inquirerMenu = async () => {

    console.clear();
    console.log('========================'.green);
    console.log('    Select an option    '.green);
    console.log('========================\n'.green);

    // destructuring the option because come the option in object and we need only value
    const { option } = await inquirer.prompt(questions);

    return option;

};

const pause = async () => {
    
    const stop = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPress ${'ENTER'.green} to continue\n`
        }
    ]
    console.log('\n');
    await inquirer.prompt(stop);
}

module.exports = {
    inquirerMenu,
    pause
}
