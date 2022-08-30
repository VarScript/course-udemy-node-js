const name = 'Deadpool';
const real = 'Wade Winston';

const normal = name + ' ' + real;

console.log(normal);

// Template Strings 

// Way for string define
//const template = `${1 + 1} Fabio`;
const template = `${name} ${real}`;

console.log(template);

console.log(normal === template);

// create character jump
const html = `
    <h1>Hello</h1>
    <p>world</p>
`;

console.log(html)