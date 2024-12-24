import { WordsRequest } from "@/types";

export class WordGenerationService {
  constructor() {}

  punctuationChars = [".", ",", "!", "?"];
  numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  private getRandomIndices(wordCount: number, count: number): number[] {
    const indices = new Set<number>();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * wordCount));
    }
    return Array.from(indices);
  }

  async readJson(filename: string) {
    try {
      const response = await fetch(`/static/${filename}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch language data: ${response.statusText}`
        );
      }

      const jsonData = await response.json();

      return jsonData;
    } catch (err) {
      return {
        words: [],
      };
    }
  }

  private addPunctuationToWords(words: string[], count: number): string[] {
    const wordsWithPunctuation = [...words];
    const punctuationIndices = this.getRandomIndices(words.length, count);

    punctuationIndices.forEach((index) => {
      const punctuation =
        this.punctuationChars[
          Math.floor(Math.random() * this.punctuationChars.length)
        ];
      wordsWithPunctuation[index] = wordsWithPunctuation[index] + punctuation;
    });

    return wordsWithPunctuation;
  }

  //should be private
  private insertNumbersIntoWords(words: string[], count: number): string[] {
    const wordsWithNumbers = [...words];
    const numberIndices = this.getRandomIndices(words.length, count);

    numberIndices.forEach((index) => {
      const number =
        this.numberChars[Math.floor(Math.random() * this.numberChars.length)];
      wordsWithNumbers.splice(index, 0, number);
    });

    return wordsWithNumbers;
  }

  async getWords(req: WordsRequest): Promise<string[]> {
    const jsonData = await this.readJson(req.language);

    const words = jsonData.words as string[];

    let random_words = words
      .sort(() => 0.5 - Math.random())
      .slice(0, req.count);

    if (req.punctuation) {
      random_words = this.addPunctuationToWords(random_words, req.count / 5);
    }

    if (req.numbers) {
      random_words = this.insertNumbersIntoWords(random_words, req.count / 5);
    }

    return random_words;
  }
}
