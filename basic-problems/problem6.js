/**
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
 * Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
 * Note: The function accepts an integer and returns an integer.


 */

function squareDigits(num) {
  return parseInt(
    num
    .toString()
    .split("")
    .map(digit => (digit * digit))
    .join('')
  )
}

console.log(squareDigits(9414));
