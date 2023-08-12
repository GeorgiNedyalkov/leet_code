function letterCombinations(digits) {
    const result = [];
    let map = new Map();

    map.set("2", ["a", "b", "c"]);
    map.set("3", ["d", "e", "f"]);
    map.set("4", ["g", "h", "i"]);
    map.set("5", ["j", "k", "l"]);
    map.set("6", ["m", "n", "o"]);
    map.set("7", ["p", "q", "r", "s"]);
    map.set("8", ["t", "u", "v"]);
    map.set("9", ["w", "x", "y", "z"]);

    for (let i = 0; i < digits.length; i++) {
        const firstCombination = map.get(digits[i]);
        const secondCombination = map.get(digits[i + 1]);

        if (secondCombination === undefined) {
            break;
        }

        for (let j = 0; j < firstCombination.length; j++) {
            const combination = firstCombination[i] + secondCombination[j];

            result.push(combination);
        }
    }

    return result;
}

console.log(letterCombinations("23"));
