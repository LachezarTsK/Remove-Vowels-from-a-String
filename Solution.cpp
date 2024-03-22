
#include <string>
using namespace std;

class Solution {

public:
    string removeVowels(const string& input) const {
        string inputWithRemovedVowels;
        for (const auto& letter : input) {
            if (isVowel(letter)) {
                continue;
            }
            inputWithRemovedVowels.push_back(letter);
        }
        return inputWithRemovedVowels;
    }

private:
    bool isVowel(char letter) const {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
};
