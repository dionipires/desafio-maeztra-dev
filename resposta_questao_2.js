function findDuplicates(arr) {
    let duplicates = [];
    let counts = {};

    for (let num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (let num in counts) {
        if (counts[num] > 1) {
            duplicates.push(parseInt(num));
        }
    }

    return duplicates;
}

// Forma de Teste:
const inputArray = [4, 5, 44, 98, 4, 5, 6, 7];
console.log(findDuplicates(inputArray)); // Output: [4, 5]
