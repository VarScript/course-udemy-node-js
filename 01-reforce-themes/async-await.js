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

// when added the async it convert in async function 
// transform the function in a function that return a promise 

const id = 3;

const getInfoUser = async () => {
    try{
        const employee = await getEmployeeById(id);
        const salary = await getSalaryById(id);
    
        return `The employe: ${employee}, have a salary of: ${salary}`
    } catch (error) {
        throw error;
    }
}

getInfoUser( id )
    .then(msg => {
        console.log('Ok')
        console.log(msg)
    })
    .catch(err => {
        console.log('Bad')
        console.log(err)
    })