function reverseWordsInSentence(sentence) {
    let words = [];
    let currentWord = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            currentWord = sentence[i] + currentWord; // Add characters in reverse order
        } else {
            words.push(currentWord);
            currentWord = "";
        }
    }
    words.push(currentWord); // Add the last word

    // Join the reversed words to form the reversed sentence
    let reversedSentence = words.join(' ');

    return reversedSentence;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (sentence) => {
    const reversedSentence = reverseWordsInSentence(sentence);
    console.log("Reversed sentence: " + reversedSentence);

    rl.close();
});
