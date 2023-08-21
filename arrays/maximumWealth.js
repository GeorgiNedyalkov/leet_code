function maximumWealth(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }

        if (sum >= maxWealth) {
            maxWealth = sum;
        }
    }

    return maxWealth;
}

function maxWealthMinMemory(accounts) {
    return Math.max(
        ...accounts.map((customer) =>
            customer.reduce((acc, curr) => acc + curr)
        )
    );
}

function builtInMaxWealth(accounts) {
    let maxWealth = 0;

    accounts.forEach((customer) => {
        let wealth = 0;
        customer.forEach((balance) => (wealth += balance));
        maxWealth = Math.max(wealth, maxWealth);
    });

    return maxWealth;
}
