#include <iostream>
#include <vector>
#include <string>
#include <cmath>

int findPermutationDifference(std::string s, std::string t)
{
	int sum = 0;
	for (int i = 0; i < s.size(); i++)
	{
		for (int j = 0; j < t.size(); j++)
		{
			if (s[i] == t[j])
			{
				sum += fabs(i - j);
				continue;
			}
		}
	}

	std::cout << sum << std::endl;

	return sum;
}

int main()
{

	findPermutationDifference("abcde", "edbac");
	findPermutationDifference("abc", "bac");

	return 0;
}