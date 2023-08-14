function numIdenticalPairs(nums) {
    if (nums.length === 0) return 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }

    return count;
}

function mapNumIdenticalPairs(nums) {
    let count = 0;
    let frequencymap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (frequencymap.has(nums[i])) {
            frequencymap.set(nums[i], frequencymap.get(nums[i]) + 1);
            count += frequencymap.get(nums[i]);
        } else {
            frequencymap.set(nums[i], 0);
        }
    }

    return count;
}

const input1 = [1, 2, 3, 1, 1, 3];
console.log(mapNumIdenticalPairs(input1));
const input2 = [1, 1, 1, 1];
console.log(mapNumIdenticalPairs(input2));
const input3 = [1, 2, 3];
console.log(mapNumIdenticalPairs(input3));
