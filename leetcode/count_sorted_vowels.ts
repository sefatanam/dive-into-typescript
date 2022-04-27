

countVowelStrings(1);


function countVowelStrings(n: number): number {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  if (n === 0) return 0;
  if (n === 1) return vowels.length;
};