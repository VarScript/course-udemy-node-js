console.log('Start of program'); // 1

setTimeout(() => {
    console.log('First Timeout'); // 5
}, 3000 );


setTimeout(() => {
    console.log('Second Timeout'); // 3
}, 0 );


setTimeout(() => {
    console.log('Third Timeout'); // 4
}, 0 );


console.log('End of program'); // 2