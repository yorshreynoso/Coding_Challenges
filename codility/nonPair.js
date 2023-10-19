function solution(A) {
    // Implement your solution here
    const sortA = A.sort((a, b) =>  a-b );
    let nextIndex = 0;
    
    for(let index = 0; index < sortA.length; index +=2) {
        nextIndex = index + 1;
        if(nextIndex > sortA.length || index > sortA.length) return sortA[index];

        if(sortA[index] !== sortA[nextIndex] ) {
            return sortA[index];
        }
    }
    return 'algo paso'; // never and never should entry here
}


const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A));


// the solution was correct
// i got 100% of total score