/**
 * Find the Second Largest Element in an Array
 * This function takes an array of numbers and returns the second largest number from the array.
 * array: An array of numbers. (Each element must be a number)
 * The function initializes two variables, max and secondMax, to -Infinity. This ensures that any number from the array will be larger than the initial values.
 * It then iterates over each number in the array using forEach().
 * If a number is larger than the current max, the function updates secondMax to the previous max and updates max to the current number.
 * If a number is smaller than max but larger than secondMax, it updates secondMax with the current number.
 * Finally, the function returns the secondMax.

 */
function findLastMaxElement (array) {
    let max = -Infinity;
    let secondMax = -Infinity;

    array.forEach(num => {
        if(num >max){
            secondMax= max
            max = num;

        } else if(num > secondMax && num <max){
            secondMax = num;
        }
    });
return secondMax;

}
