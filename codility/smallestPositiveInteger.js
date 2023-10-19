function solution(A) {
    // Implement your solution here
    const sortA = A.sort((a,b) => a-b);

    for(let [num, index] of sortA.entries()) {
        
        if(!(num +1 == sortA[index] && index < sortA.length)) {
            return num+1;
        }
        else if(!(num == num +1)) {
            console.log(`que pasho aqui ${num}`);
        } else {
            console.log(`check what happend ${num}`);
        }
        
    }
    return index;
}

console.log(solution([1, 3, 6, 4, 1, 2])) ;

