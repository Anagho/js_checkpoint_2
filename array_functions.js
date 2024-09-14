
// (1) Minimum and Maximum value
// function to find the maximum and minimum values in an array of numbers.

function min_max(arr) {

    let min = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        
        // check for the minimum number
        if (arr[i] < min ) {
            min = arr[i]
        }

        // check for the maximum number
        if (arr[i] > min ) {
            max = arr[i]
        }
    }

    return `min : ${min}, max : ${max}`
}

console.log(min_max([1,2,3,4,5]))


// (2) Sum of Array
// function that calculates the sum of all elements in an array.

function sum_arr(arr) {

    // using the reduce function
    let sum = arr.reduce((accumulator, currentVal) => {
        return accumulator + currentVal           // current value starts from arr[0], the 1st value in the array
    }, 0)

    return sum
}

console.log(`sum: ${sum_arr([1,2,3,4,5])}`)


// (3) Filter Array
// function that filters out elements from an array based on a given condition.

// filter a list of products based on a user's search
function searchProducts(products, query) {
    return products.filter(product => product.toLowerCase().includes(query.toLowerCase())).join(', ')
}

let products = ['Dell', 'hp', 'Acer', 'Apple', 'Lenovo', 'Asus', 'Samsung'];
console.log(searchProducts(products, 'elo'))