function leftRightDifference(nums) {
    let answer = [];
    let leftSumArr = [];
    let rightSumArr = [];
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
let arr = [10, 4, 8, 3];
console.log(leftRightDifference(arr));
