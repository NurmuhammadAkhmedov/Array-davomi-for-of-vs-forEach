let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let wordsWithN = [];
let wordsWithoutN = [];

letterSearch.forEach(word => {
    if (word.includes('n')) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
});

console.log("So'z ichida 'n' harfi qatnashganlar:", wordsWithN);
console.log("So'z ichida 'n' harfi qatnashmaganlar:", wordsWithoutN);
