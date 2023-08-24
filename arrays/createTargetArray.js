/*
    @param {number[]} nums
    @param {number[]} index 
    @return {number[]}
*/

function createTargetArray(nums, index) {
    const target = [];

    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }

    return target;
}

const nums1 = [0, 1, 2, 3, 4];
const index1 = [0, 1, 2, 2, 1];

console.log(createTargetArrayTwo(nums1, index1));

function createTargetArrayTwo(nums, index) {
    const target = [];

    for (let i = 0; i < nums.length; i++) {
        target[index[i]] = nums[i];
    }

    return target;
}
