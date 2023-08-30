function decompressRELList(nums: number[]) {
    const result: number[] = [];

    while (nums.length !== 0) {
        const newArr = nums.splice(0, 2);

        let frequency = newArr[0];
        let value = newArr[1];

        for (let i = 0; i < frequency; i++) {
            result.push(value);
        }
    }

    return result;
}

console.log(decompressRELList([1, 2, 3, 4]));
