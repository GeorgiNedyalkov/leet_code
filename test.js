function pow(x, n) {
    if (n === 0) {
        return 1;
    }

    if (x === 1) {
        return 1;
    }

    let result = x;

    for (let i = 0; i < Math.abs(n) - 1; i++) {
        result *= x;
    }

    if (n < 0) {
        return 1 / result;
    }

    return result;
}

console.log(pow(2, 3));
