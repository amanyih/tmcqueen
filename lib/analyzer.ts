import { WordType, AnalysisType } from "@/types";

export function analyzer(words: WordType[], time: number): AnalysisType {
  let correctCharacters = 0;

  const correctWords = 0;
  const incorrectWords = 0;

  const filteredWords = removeWhiteSpace(words);

  const totalWords = filteredWords.length;
  let totalCharacters = 0;

  words.forEach((element) => {
    totalCharacters += element.letters.length;
  });

  words.forEach((word) => {
    word.letters.forEach((letter) => {
      if (letter.status === "correct") {
        correctCharacters++;
      }
    });
  });

  const rawWpm = totalCharacters / 5 / (time / 60);
  const wpm = correctCharacters / 5 / (time / 60);
  const accuracy = correctCharacters / totalCharacters;
  const consistency = 0; //TODO: implement consistency

  const incorrectCharacters = totalCharacters - correctCharacters;

  return {
    wpm,
    rawWpm,
    accuracy,
    consistency,
    correctCharacters,
    incorrectCharacters,
    correctWords,
    incorrectWords,
    totalWords,
    totalCharacters,
  };
}

function removeWhiteSpace(words: WordType[]): WordType[] {
  return words.filter((word) => {
    if (!(word.letters.length === 1 && word.letters[0].char === " ")) {
      return word;
    }
  });
}
