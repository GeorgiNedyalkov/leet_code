function leftRightDifference(nums) {
    // find the left sum arr
    let leftSum = [];

    for (let i = 0; i < nums.length; i++) {
        if (!leftSum[i]) {
            leftSum.push(0);
        }

        if (leftSum.length === nums.length) {
            break;
        }

        let currentLeftSum = leftSum[i] + nums[i];
        leftSum.push(currentLeftSum);
    }

    // find the right sum of arr
    for (let i = nums.length - 1; i !== 0; i--) {}
}

leftRightDifference([10, 4, 8, 3]);
