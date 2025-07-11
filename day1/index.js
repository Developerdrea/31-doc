//Day 1
console.log("Hello Andrea!, Welcome to Node.js");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Rea!');
});

app.listen(3000,() =>{
    console.log('Server running on port 3000');
});

//Day 2
const math = require('../day2/math');

//functions.add(12,13);
//functions.subtract(12,13);

console.log(math.add(5, 3)); // Should print 8
console.log(math.subtract(10, 4)); // Should print 6

console.log("Math operations completed successfully!");