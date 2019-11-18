// Palindrome

const palindrome = str => {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}
// Check Palindrome

const isPalindrome = (word) => {
    if (!word) {
        return;
    }
    return word.split('').reverse().join('') === word;
};
console.log(isPalindrome('racecar'))