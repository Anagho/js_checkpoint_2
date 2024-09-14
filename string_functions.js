
// (1) Reverse A String
// function to reverse a string
function reverseStr (str) {
    // Method 1
    // return str.split('').reverse().join('')

    // Method 2
    let reversed = '';  // initialize an empty string variable

    // count the string from the last character to the first character
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // fill up the variable for every count 
    }
    return reversed;
}

console.log(`Reversed Word: ${reverseStr('Hello')}`)


// (2) Count Characters
// function to count the characters of a string
function countCharaters(str) {
    // Method 1
    // return str.length;

    // Method 2
    let count = 0; // start the count from 0
    // iterate through each characters and take the count
    for (let char of str) {
        count++;  // increment the count for each character
    }

    return count;
}

console.log('Your word count is: ', countCharaters("Emmanuel"))


// (3) Capitalize Words
// function to capitalizes the first letter of each word in a sentence.
function capitalizeWord(str) {
    let result = ''; 
    
    result = str.split(' ');    // Split the string into an array of words by spaces
    
    // Use map to iterate over each word
    result = result.map((word) => {
        
        // get each word and capitalize the first letter, then concatenate the rest letter to lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });

    result = result.join(' ');  // Join the array back into a string by spaces

    return result;
}

console.log(capitalizeWord('hello world'));
