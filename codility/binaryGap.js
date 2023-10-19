// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    const binary = N.toString(2).split("").reverse();
    let biggest = 0;
    let count = 0;

    const index = binary.indexOf("1"); // the index returned, will be the first iteration to start;
    if(index === "-1") { return 0;}

   for(let i = index; i< binary.length; i++) {
       if(binary[i] === "0") {
           count += 1;
           if(biggest < count) {
               biggest = count;
           }
       } else {
           count =0;
       }
   }
   return biggest;
}

solution(1041);


//correct