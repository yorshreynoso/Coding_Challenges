function solution(A) {
    // Implement your solution here
    const sortOrder = A.sort(( a, b ) => a - b );
    let firstValue = 0
    let secondValue = 0
    let count = 0;


    for(let i = 0; i< sortOrder.length; i++) {
        firstValue = sortOrder[i];
        secondValue = sortOrder[i +1];

        if(firstValue > 0 ){
            if(firstValue === secondValue) {
                console.log('son iguales nothing happend', firstValue);
            }
            else if(firstValue + 1 === secondValue) {
                console.log('todo ok, sigue secuencia');
            } else if(typeof(secondValue) === 'undefined') {
                console.log('value ', secondValue);
                return firstValue + 1; // this is the real value
            } 
            else if(firstValue +1 !== secondValue) {
                return firstValue +1; // valor buscado
            }
            else{
                console.log('no tengo idea');
            }

        } else {
            if(firstValue === secondValue) {
                console.log('son iguales negative number', firstValue);
            }
            else if(firstValue - 1 === secondValue) {
                console.log('todo ok, sigue secuencia');
            } else if(typeof(secondValue) === 'undefined') {
                console.log('value ', secondValue);
                return firstValue - 1; // this is the real value
            } 
            else if(firstValue -1 !== secondValue) {
                return firstValue -1; // valor buscado
            }
            else{
                console.log('no tengo idea negativo');
            }
        }


    }
    
}

const solve = solution([1, 3, 6, 4, 1, 2]);
// const solve = solution([1, 2, 3]);
//[ 1, 1, 2, 3, 4, 6 ]

console.log(solve);