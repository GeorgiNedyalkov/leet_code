function searchMatrix(matrix, target) {
    let rowIndex = 0;

    for (let i = 0; i < matrix.length; i++) {
        const currentFirstNumber = matrix[i][0];
        if (currentFirstNumber === target) {
            return true;
        }

        if (currentFirstNumber > target) {
            rowIndex = i - 1;
            break;
        } else {
            rowIndex = i;
        }
    }

    for (let i = 0; i < matrix[rowIndex]?.length; i++) {
        if (matrix[rowIndex][i] === target) {
            return true;
        }
    }

    return false;
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34],
];

console.log(searchMatrix(matrix, 30));
