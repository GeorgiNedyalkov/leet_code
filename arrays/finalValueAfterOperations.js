function finalValueAfterOperations(operations) {
    // operation: [--X, X++, X++]
    let value = 0;

    // go through all operations in operations array
    for (let i = 0; i < operations.length; i++) {
        // get the current operation
        const currentOperation = operations[i];

        if (currentOperation[0] === "-" || currentOperation[2] === "-") {
            value--;
        } else {
            value++;
        }
    }

    return value;
}

const operations1 = ["--X", "X++", "X++"];
const operations2 = ["++X", "++X", "X++"];

// console.log(finalValueAfterOperations(operations1));
console.log(finalValueAfterOperations(operations2));

function fasterFinalValueAfterOperations(operations) {
    let value = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            value++;
        } else {
            value--;
        }
    }

    return value;
}

function builtInFinalValueAfterOperations(operations) {
    if (operations.length === 0) return 0;
    let x = 0;
    operations.forEach((operation) => {
        if (operation == "++X" || operation == "X++") {
            x++;
        } else {
            x--;
        }
    });
    return x;
}

function reduceToFinalValueAfterOperations(operations) {
    return operations.reduce((acc, curr) => {
        acc += curr === "X++" || curr === "++X" ? 1 : -1;
        return acc;
    }, 0);
}
