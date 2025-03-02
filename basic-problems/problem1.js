/**
 * How it Works:
 * First, the function sets the first element of the array (numbers[0]) as the initial max value.
 * Then, it iterates over the array using forEach() to compare each element. If an element is greater than the current max, it updates max.
 * Finally, it returns the highest value found in the array, max.
 */
const numbers = [12, 45, 67, 89, 23, 90, 34];

function findMax(numbers) {
    let max = numbers[0];
    numbers.forEach(element => {
        if(max<element){
            max = element;
        }
    });
    return max;
}
// function findMax(numbers) {
//     return Math.max(...numbers);
// }



