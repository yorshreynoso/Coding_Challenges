//55% of score, i got this because de performance is low
// function solution(X, Y, D) {
//     // Implement your solution here
//     let jump = 0;
//     let countingJumps =  0;

//     if(X >= Y) return 0;
//     jump = X;

//     while(jump < Y ) {
//         jump += D;
//         countingJumps++;
//     }
//     return countingJumps;

// }


// const X = 10;
// const Y = 85;
// const D = 30;


const X = 1;
const Y = 5;
const D = 2;
//expected 2

console.log(solution(X, Y, D));



// new try
// 22%
function solution(X, Y, D) {
    //if(Y % X == 0) return 0;
    X = D;
    if( Y % X   === 0) return Math.floor(Y / X);
    const result = Math.floor((Y / X) + 1);
    return result;
}