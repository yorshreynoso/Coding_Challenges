/**
 * Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

 

Example 1:

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.

 

Constraints:

    1 <= arr.length <= 500
    1 <= arr[i] <= 500


 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let biggest = -1;
    myDictionary = new Object();
    arr.forEach( number => {
        if(typeof myDictionary[number] !== 'undefined') {
            console.log('entra');
            myDictionary[number] += 1;
        } else {
            myDictionary[number] = 1;
        }
    });
    console.log('myDictionary',myDictionary);

    for(const property in myDictionary) {
        console.log(`property ${property}, object ${myDictionary[property]}`);
        if(property == myDictionary[property] && Number(property) > Number(biggest)) {
            biggest = property;
        }
    }
    return biggest;
};


console.log(findLucky([5,8,10,9,8,10,9,6,6,7,10,8,10,10,9,4,6,2,10,3,5,10,2,6,4,8,7,3,9,9,5,7,8,7,11,9,3,1,5,11,9,5,8,10,8,4,9,7,6,7,10,9,7,8,6,10,4]));



//reduced
var findLucky2 = function(arr) {
    let biggest = -1;
    myDictionary = new Object();
    arr.forEach( number => typeof myDictionary[number] !== 'undefined' ? myDictionary[number] += 1 : myDictionary[number] = 1 );

    for(const property in myDictionary) {
        biggest = property == myDictionary[property] && Number(property) > Number(biggest) ? property : biggest;
    }  
    return biggest;
}

console.log(findLucky2([5,8,10,9,8,10,9,6,6,7,10,8,10,10,9,4,6,2,10,3,5,10,2,6,4,8,7,3,9,9,5,7,8,7,11,9,3,1,5,11,9,5,8,10,8,4,9,7,6,7,10,9,7,8,6,10,4]));