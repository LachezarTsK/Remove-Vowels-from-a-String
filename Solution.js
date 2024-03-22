
/**
 * @param {string} input
 * @return {string}
 */
var removeVowels = function (input) {
    const inputWithRemovedVowels = new Array();
    for (let letter of input) {
        if (isVowel(letter)) {
            continue;
        }
        inputWithRemovedVowels.push(letter);
    }
    return inputWithRemovedVowels.join('');
};

/**
 * @param {string} letter
 * @return {boolean}
 */
function isVowel(letter) {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
