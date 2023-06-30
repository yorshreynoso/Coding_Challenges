//Non-blocking, asynchoronous way

const fs = require('fs');

fs.readFile('./data/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log('error')
    fs.readFile('./data/final.txt', 'utf-8', (err, data2) => {
        console.log(data2 + data1);
        fs.writeFile('./data/result.txt', data2 + data1, 'utf-8', err => {
            console.log('Your file has been written');
        })
    });
});

console.log('will I run first?');