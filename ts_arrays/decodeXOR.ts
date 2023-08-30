function decode(econded: number[], first: number) {
    const result = [first];

    for (let i = 0; i < econded.length; i++) {
        result.push(econded[i] ^ result[i]);
    }

    return result;
}
