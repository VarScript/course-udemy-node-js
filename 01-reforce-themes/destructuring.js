const deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'Regeneration',
    age: 50,
    getName() {
        return `${this.name} ${this.surname} ${this.power}`
    }

}

// const name = deadpool.name;
// const surname = deadpool.surname;
// const power = deadpool.power;

// -- Destructuraion


function printHero( hero ) {

    const { name, surname, power, age = 0 } = hero;
    console.log(name, surname, power, age);

}

printHero( deadpool );


// -- Destructuration happens in the arguments

function printHero( { name, surname, power, age = 0 } ) {

    console.log(name, surname, power, age);

}

// printHero( deadpool );


// -- For print array position and destructuration

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[2];
// const h3 = heroes[3];

const [, , h3] = heroes; 

console.log( h3 )
