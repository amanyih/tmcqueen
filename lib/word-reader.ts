import { WordsRequest } from "@/types";
function getRandomIndices(wordCount: number, count: number): number[] {
  const indices = new Set<number>();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * wordCount));
  }
  return Array.from(indices);
}

async function readJson(filename: string) {
  try {
    const response = await fetch(`/static/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch language data: ${response.statusText}`);
    }

    const jsonData = await response.json();
    console.log("fetching words", filename, "error");

    return jsonData;
  } catch (err) {
    console.log("fetching", err);
    return {
      words: [],
    };
  }
}

const punctuationChars = [".", ",", "!", "?"];
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function addPunctuationToWords(words: string[], count: number): string[] {
  const wordsWithPunctuation = [...words];
  const punctuationIndices = getRandomIndices(words.length, count);

  punctuationIndices.forEach((index) => {
    const punctuation =
      punctuationChars[Math.floor(Math.random() * punctuationChars.length)];
    wordsWithPunctuation[index] = wordsWithPunctuation[index] + punctuation;
  });

  return wordsWithPunctuation;
}

function insertNumbersIntoWords(words: string[], count: number): string[] {
  const wordsWithNumbers = [...words];
  const numberIndices = getRandomIndices(words.length, count);

  numberIndices.forEach((index) => {
    const number = numberChars[Math.floor(Math.random() * numberChars.length)];
    wordsWithNumbers.splice(index, 0, number);
  });

  return wordsWithNumbers;
}

export async function getWords(req: WordsRequest): Promise<string[]> {
  const jsonData = await readJson(req.language);

  const words = jsonData.words as string[];

  let random_words = words.sort(() => 0.5 - Math.random()).slice(0, req.count);

  if (req.punctuation) {
    random_words = addPunctuationToWords(random_words, req.count / 5);
  }

  if (req.numbers) {
    random_words = insertNumbersIntoWords(random_words, req.count / 5);
  }

  console.log("fetching getting words", random_words);

  return random_words;
}
