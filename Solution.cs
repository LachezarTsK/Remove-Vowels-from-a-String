
using System;

public class Solution
{
    public string RemoveVowels(string input)
    {
        StringBuilder inputWithRemovedVowels = new StringBuilder();
        foreach (char letter in input)
        {
            if (isVowel(letter))
            {
                continue;
            }
            inputWithRemovedVowels.Append(letter);
        }
        return inputWithRemovedVowels.ToString();
    }

    private bool isVowel(char letter)
    {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
