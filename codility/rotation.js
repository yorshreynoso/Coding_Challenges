/*Task description

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

    function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given
    A = [3, 8, 9, 7, 6]
    K = 3

the function should return [9, 7, 6, 3, 8]. Three rotations were made:
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

For another example, given
    A = [0, 0, 0]
    K = 1

the function should return [0, 0, 0]

Given
    A = [1, 2, 3, 4]
    K = 4

the function should return [1, 2, 3, 4]

Assume that:

        N and K are integers within the range [0..100];
        each element of array A is an integer within the range [−1,000..1,000].

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

*/

function solution(A, K) {
    // Implement your solution here
    let firstRotation = [];
    let lastRotation = [];
    let maxNumber = A.length -K;

    if(A.length === K) return A;
    
    for(let i = 0; i < A.length; i++) {
        if(i < maxNumber){
            lastRotation[i] = A[i];
        } else {
            firstRotation.push(A[i]);
        }
    }
    const result = firstRotation.concat(lastRotation);

    return result;
};

const A = [3, 8, 9, 7, 6];
const K = 3;
solution(A, K);



// 75% with this answer 

// example
// first example test
// ✔
// OK
// ▶
// example2
// second example test
// ✔
// OK
// ▶
// example3
// third example test
// ✔
// OK
// expand all
// Correctness tests
// ▶
// extreme_empty
// empty array
// ✔
// OK
// ▶
// single
// one element, 0 <= K <= 5
// ✔
// OK
// ▶
// double
// two elements, K <= N
// ✔
// OK
// ▶
// small1
// small functional tests, K < N
// ✔
// OK
// ▶
// small2
// small functional tests, K >= N
// ✘
// WRONG ANSWER
// got [-1, -2, -3, -4, -5, -.. expected [-3, -4, -5, -6, -1, -..
// 1.
// 0.056 s
// OK
// 2.
// 0.056 s
// WRONG ANSWER, got [-1, -2, -3, -4, -5, -.. expected [-3, -4, -5, -6, -1, -..
// 3.
// 0.052 s
// WRONG ANSWER, got [1, 1, 2, 3, 5] expected [3, 5, 1, 1, 2]
// ▶
// small_random_all_rotations
// small random sequence, all rotations, N = 15
// ✔
// OK
// ▶
// medium_random
// medium random sequence, N = 100
// ✔
// OK
// ▶
// maximal
// maximal N and K
// ✘
// WRONG ANSWER
// got [710, 807, 568, 560, .. expected [155, 710, 807, 568, ..
