/**
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

Constraints:

    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6
 * 
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = [] ;

    for(let i = 0; i<nums.length; i++) {
        let count = i;

        while(count >= 0 ) {
            if(typeof(res[i]) === 'undefined') {
                res[i] = nums[count];
            } else {
                res[i] += nums[count];

            }
            count--;
        }
    }
    return res;
};


//console.log(runningSum([1,2,3,4,5]));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum2 = function(nums) {
    let res = [] ;

    for(let i = 0; i<nums.length; i++) {
        let count = i;

        while(count >= 0 ) {
            typeof(res[i]) === 'undefined' ? res[i] = nums[count] : res[i] += nums[count];
            count--;
        }
    }
    return res;
};


console.log(runningSum2([1,2,3,4,5]));