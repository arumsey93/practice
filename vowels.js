const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let x of str.toLowerCase()) {
        if(vowels.includes(x)) {
            count ++
        }
    }
    return count
}

console.log(findVowels("Halloween"))