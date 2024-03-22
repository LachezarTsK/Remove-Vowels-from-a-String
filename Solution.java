
public class Solution {

    public String removeVowels(String input) {
        StringBuilder inputWithRemovedVowels = new StringBuilder();
        for (char letter : input.toCharArray()) {
            if (isVowel(letter)) {
                continue;
            }
            inputWithRemovedVowels.append(letter);
        }
        return inputWithRemovedVowels.toString();
    }

    private boolean isVowel(char letter) {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
