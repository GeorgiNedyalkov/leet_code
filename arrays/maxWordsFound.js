function maxWordsFound(sentences) {
    let mostWords = 0;

    for (let i = 0; i < sentences.length; i++) {
        let wordsInSentence = sentences[i].split(" ").length;
        if (wordsInSentence >= mostWords) {
            mostWords = wordsInSentence;
        }
    }

    return mostWords;
}

console.log(
    maxWordsFound([
        "alice and bob love leetcode",
        "i think so too",
        "this is great thanks very much",
    ])
);
