#include <iostream>
#include <string>
#include <vector>
#include <cmath>

// Input: is a string
// Output: int score

// A score of a string is the sum of the absolute difference of adjacent ASCII characters in the string.

int scoreOfString(std::string s)
{
    int score = 0;
    for (int i = 0; i < s.size(); i++)
    {
        if (i + 1 == s.size())
        {
            break;
        }

        score += fabs(s[i] - s[i + 1]);
    }

    std::cout << score << std::endl;
    return score;
}
