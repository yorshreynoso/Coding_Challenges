/**
 * Count elements in array of arrays

    Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. 
    The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

    input
    const input = [
        ["a", "b", "c"],
        ["c", "d", "f"],
        ["d", "f", "g"],
    ];

    result:
    {
        a: 1,
        b: 1,
        c: 2,
        d: 2,
        f: 2,
        g: 1,
    }
*/

const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];


const countElements = input.flat().reduce((acc, letter) => {
    if(acc[letter]) {
        acc[letter] += 1; 
    } else {
        acc[letter] = 1;
    }
    return acc;
    
}, {});

console.log(countElements);