function decompressRLEList(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const pair = nums.splice(0, 2);

        let frequency = pair[0];
        let value = pair[1];

        for (let i = 0; i <= frequency; i++) {
            result.push(value);
        }
    }

    return result;
}

// console.log(decompressRLEList([1, 2, 3, 4]));
console.log(decompressRLEList([55, 11, 70, 26, 62, 64]));
