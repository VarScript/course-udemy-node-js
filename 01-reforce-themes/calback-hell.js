
const employees = [
    {
        id: 1,
        name: 'Fernando'
    },
    {
        id: 2,
        name: 'Linda'
    },
    {
        id: 3,
        name: 'Teresa'
    }
];


const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    },
];

const getEmployeeById = ( id, callback ) => { 
    const employee = employees.find( e => e.id === id)?.name

    if ( employee ) callback( null, employee );
    else callback(`The Employee ${id} does not exist`); 
    
}

const getSalaryoById = ( id, callback ) => {

    const salary = salaries.find( s => s.id === id);

    if ( salary ) callback(null, salary);
    else callback(`The salary with ${id} does not exist`);

}

// --

getEmployeeById( 1, ( err, employee ) => {
    
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    } else {
        getSalaryoById( 3, ( err, salary ) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(`The employee: ${employee} have a salary of ${salary.salary}`)
            }
        });
        
    }
});

