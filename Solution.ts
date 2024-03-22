
function removeVowels(input: string): string {
    const inputWithRemovedVowels = new Array<string>();
    for (let letter of input) {
        if (isVowel(letter)) {
            continue;
        }
        inputWithRemovedVowels.push(letter);
    }
    return inputWithRemovedVowels.join('');
};

function isVowel(letter: string): boolean {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
