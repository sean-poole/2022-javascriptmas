function countVowelConsonant(str) {
    const vowels = "aeiou";
    let result = 0;
    str.split("").forEach(c => vowels.includes(c) ? result += 1 : result += 2);
    return result;
}

console.log(countVowelConsonant("abcde"))

/**
 * Test Suite 
 */
// describe('countVowelConsonant()', () => {
//     it('returns total of vowels(1) and consonants(2) to be added', () => {
//         // arrange
//         const value = 'abcde';
        
//         // act
//         const result = countVowelConsonant(value);

//         // log
//         console.log("result: ", result);
        
//         // assert
//         expect(result).toBe(8);
//     });
// });