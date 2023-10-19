let a =[[ 11, 2,  4 ],
        [4,   5,  6 ], 
        [10, 8, -10]
    ];



let sum = 0;
let sum2 = 0;
let indexRev = a[0].length;

for(let i=0; i< a[0].length; i++) {
    indexRev -=1;
    sum += a[i][i];
    sum2 += a[i][indexRev];
}

 console.log('sum', sum, ' sum2 ', sum2);  
console.log(Math.abs(sum - indexRev));