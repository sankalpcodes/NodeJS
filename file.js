const fs = require('fs');

// fs.writeFileSync("./test.txt", "Hey Riya");

//'sync' here means that this is a synchronous call


//this is async call. here we have to pass an error handling arg too
// fs.writeFile('./test.txt', 'Hey this is a async call', (err) => {})

// read a file

// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

//in async reading it can not store the result in the variable and we need to pass callback functions for error handling and storing the result
fs.readFile('./contacts.txt', 'utf-8', (err,result) => {
    if(err){
        console.log("ERROR");
    } else{
        console.log(result);
    }
})


//how to APPEND in a file

fs.appendFileSync('./test.txt',  `${Date.now()}, HEY THERE\n`) //appending a file

fs.copyFileSync('./test.txt', './copy.txt') //copying a file 

fs.unlinkSync('./copy.txt')