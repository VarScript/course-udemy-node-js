
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


const getEmployeeById = ( id ) => { 
    
    return new Promise((resolve, reject) => {
        
        const employee = employees.find( e => e.id === id)?.name;

        (employee)  
            ? resolve (employee)
            : reject (`Not exist the employee with id ${id}`)        
    });
}


const getSalaryById = (id) => {
    
    return new Promise((resolve, reject) => {
        const salary = salaries.find( s => s.id === id)?.salary;

        (salary) 
            ? resolve (salary)
            : reject (`Not exist salary with id ${id}`)
    });
}

const id = 3;

// getEmployeeById(id)
        // .then is: execute this if all it's be good
//     .then( employee => console.log(employee))
//     .catch( err => console.log(err))

// getSalaryById(id)
//     .then(salary => console.log(salary))
//     .catch(err => console.log(err))

// --

// the .then are concatenates 
let name;

getEmployeeById(id)
    .then( employee => {
        name = employee;
        return getSalaryById(id);
    })
    .then(salary => console.log(`The employee: ${name}, have a salary of: ${salary}`))
    .catch(err => console.log(err))
