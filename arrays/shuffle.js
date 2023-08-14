function shuffle(arr, n) {
    let result = [];
    const firstArr = arr.splice(0, n);

    for (let i = 0; i < arr.length; i++) {
        result.push(firstArr[i]);
        result.push(arr[i]);
    }

    return result;
}

// best solution
function fasterShuffle(nums, n) {
    result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }

    return result;
}
