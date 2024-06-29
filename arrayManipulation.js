function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]



function formatArrayStrings(stringArray, numberArray) {
    const result = [];
    for (let i = 0; i < stringArray.length; i++) {
        const currentString = stringArray[i];
        const correspondingNumber = numberArray[i];

        if (correspondingNumber % 2 === 0) {
            result.push(currentString.toUpperCase()); // Capitalize if even
        } else {
            result.push(currentString.toLowerCase()); // Convert to lowercase if odd
        }
    }
    return result;
}


const inputStrings = ["Hello", "World", "Cindy"];
const processedNumbers = [3, 4, 9];
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "Cindy"]
