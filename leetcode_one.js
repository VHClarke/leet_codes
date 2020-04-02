/**


Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     nums.sort();
    let num = [];
    for (let i = 0; i<nums.length-1; i++){
        if (nums[i] === nums[i+1]){
               num.push(nums[i])
               num.push(nums[i+1])
    }
    }
    let result = nums.filter(x => !num.includes(x));
    console.log (result, 'this is result')
    return result
};
