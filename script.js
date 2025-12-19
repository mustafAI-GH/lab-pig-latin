function translatePigLatin(word) {

  let vowels = "aeiou";

  if (vowels.includes(word[0])) {
    return word + "way";
  }

  let consonantCluster = "";
  let restOfWord = "";

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      consonantCluster = word.slice(0, i);
      restOfWord = word.slice(i);
      break;
    }
  }

  if (restOfWord === "") {
    return word + "ay";
  }

  return restOfWord + consonantCluster + "ay";

}
