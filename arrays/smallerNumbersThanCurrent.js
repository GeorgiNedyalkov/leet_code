function smallerNumbersThanCurrent(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] > nums[j]) {
                count++;
            }
        }

        result.push(count);
    }

    return result;
}

const smallerNumbersThanCurrent = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }

            if (nums[i] > nums[j]) {
                count++;
            }
        }

        result.push(count);
    }

    return result;
};
