function containsDuplicate(nums) {
    const set = new Set(nums);

    if (set.size === nums.length) {
        return false;
    }

    return true;
}

console.log(containsDuplicate([1, 2, 3, 1]));
