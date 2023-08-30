function leftRightDifference(nums: number[]) {
    const answer: number[] = [];
    const leftSumArr: number[] = [];
    const rightSumArr: number[] = [];

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] === undefined) {
            leftSumArr[i] = leftSum;
        }

        leftSum += nums[i];
        leftSumArr.push(leftSum);

        let rightSum = 0;
        for (let j = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }

        rightSumArr.push(rightSum);

        let difference = Math.abs(leftSumArr[i] - rightSumArr[i]);
        answer.push(difference);
    }

    return answer;
}
