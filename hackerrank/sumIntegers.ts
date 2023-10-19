function simpleArraySum(ar: number[]): number {

    const totalSum = ar.reduce((previousValue: number, currentValue: number): number => {
        return previousValue + currentValue;
    })

    
return totalSum;
}

console.log(simpleArraySum([1,2,3,4]));
