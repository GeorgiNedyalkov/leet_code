function isPalindrome(x) {
    let str = x.toString();
    let isEven = str.length % 2 === 0;

    if (isEven) {
        let firstString = str.slice(0, str.length / 2);
        let secondString = Array.from(str.slice(str.length / 2))
            .reverse()
            .join("");

        return firstString === secondString;
    } else {
        let firstString = str.slice(0, Math.floor(str.length / 2));
        let secondString = str.slice(Math.ceil(str.length / 2));

        return firstString === secondString;
    }
}

function shortSsPalindrome(x) {
    if (x.toString().length % 2 === 0) {
        return (
            x.toString().slice(0, x.toString().length / 2) ===
            Array.from(x.toString().slice(x.toString().length / 2))
                .reverse()
                .join("")
        );
    } else {
        return (
            x.toString().slice(0, Math.floor(x.toString().length / 2)) ===
            x.toString().slice(Math.ceil(x.toString().length / 2))
        );
    }
}
