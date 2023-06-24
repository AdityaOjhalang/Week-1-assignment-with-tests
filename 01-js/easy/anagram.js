/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(word1, word2) {
  // Remove any non-alphabetic characters from the words
  word1 = word1.replace(/[^a-zA-Z]/g, "");
  word2 = word2.replace(/[^a-zA-Z]/g, "");

  // Check if the lengths of the words are different
  if (word1.length !== word2.length) {
    return false;
  }

  // Convert the words to lowercase
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  // Convert the words to arrays and sort them
  var sortedWord1 = word1.split("").sort().join("");
  var sortedWord2 = word2.split("").sort().join("");

  // Compare the sorted words
  return sortedWord1 === sortedWord2;
}

module.exports = isAnagram;
