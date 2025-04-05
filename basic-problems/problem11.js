/**
 * Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 * exp
 * "Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
 *
 */


const handleGninisSWord = (string) => {
  const word = string.split(" ");
  const ginniSpWord = word.map((w) => {
    const filterWord = w.split("");
    if (filterWord.length > 5) {
      return filterWord.reverse().join("");
    } else {
      return filterWord.join("");
    }
  });
  return ginniSpWord.join(" ");
};



function spinWords(string){
    return string.split(' ').map((w) => w.length >=5 ? w.split('').reverse().join('') : w).join(' ')
   }

