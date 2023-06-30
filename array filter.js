employee = ['yorsh', 'lizzy', 'Azeneth', 'Mulan', 'Cami'];


/** Array sort
 * This help us to sort number, introduce the two first arguments, very helpful
 */
const aSort = employee.sort((a, b) => {
    console.log(a, b);
    return (a,b);
});
console.log(aSort);


/** Array reduce
 * 
 */

total = [1, 2, 3, 4, 5, 6, 7];

const aTotal = total.reduce((previosValue, currentValue, currentIndex) => {
    console.log(`previousValue: ${previosValue}, currentValue: ${currentValue}, currentIndex:${currentIndex}`);
    return previosValue + currentValue;
});
console.log(aTotal);
