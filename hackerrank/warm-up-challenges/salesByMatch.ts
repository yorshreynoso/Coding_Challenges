/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

Example
 n =7;
 ar = [1,2,1,2,1,3,2]
There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer n, the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

sample output
3
*/

/**
 * 
 * @param n 
 * @param ar 
 * @returns number
 */

function sockMerchant(n: number, ar: number[]): number {
    let frequency: Record<number, number> = {};
    ar.sort((a:number, b:number) => a-b);
    
    for(let i=0; i < n; i++) {
        const element = ar[i];
        
        frequency[element] = (frequency[element] || 0 ) + 1
    }
    let pairs = 0;
    for(const key in frequency) {
        pairs += Math.floor(frequency[key] / 2);
    }
    return pairs;
}


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));