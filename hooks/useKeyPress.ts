import { parseText } from "@/lib/utils";
import { getWords } from "@/lib/word-reader";
import { usePracticeStore, useUIStore } from "@/store";
import { WordsRequest, WordType } from "@/types";
import { useCallback, useEffect, useState } from "react";

type useKeyPressProps = {
  setWordIndex: (index: number) => void;
  wordRequest: WordsRequest;
};

export const useKeyPress = ({
  setWordIndex,
  wordRequest,
}: useKeyPressProps) => {
  const [words, setWords] = useState<WordType[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);

  const { startTyping, isTyping } = usePracticeStore();
  const { modal } = useUIStore();

  const fetchWords = useCallback(async () => {
    const text = await getWords(wordRequest);

    setWords(parseText(text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordRequest]);

  useEffect(() => {
    fetchWords();
  }, [fetchWords, wordRequest]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;

    if (
      key == "Shift" ||
      key == "Control" ||
      key == "CapsLock" ||
      key == "Alt"
    ) {
      return;
    }

    if (modal.isOpen) {
      return;
    }

    const wordsCopy = [...words];
    const currentWord = wordsCopy[currentWordIndex];
    const currentLetter = currentWord.letters[currentLetterIndex];

    if (key == "Backspace") {
      currentLetter.status = "pending";
      if (currentLetterIndex == 0) {
        if (currentWordIndex == 0) {
          setWords(wordsCopy);
          return;
        }
        let previousLetter =
          words[currentWordIndex - 1].letters[
            words[currentWordIndex - 1].letters.length - 1
          ];
        previousLetter.status = "pending";
        setCurrentWordIndex(currentWordIndex - 1);
        setCurrentLetterIndex(words[currentWordIndex - 1].letters.length - 1);
      } else {
        let previousLetter =
          words[currentWordIndex].letters[currentLetterIndex - 1];
        previousLetter.status = "pending";
        setCurrentLetterIndex(currentLetterIndex - 1);
      }
      setWords(wordsCopy);
      setWordIndex(currentWordIndex);

      return;
    }

    if (!isTyping) {
      startTyping();
    }

    if (currentLetter.char === key) {
      currentLetter.status = "correct";
      if (currentLetterIndex + 1 == currentWord.letters.length) {
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentLetterIndex(0);
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    } else {
      currentLetter.status = "incorrect";
      if (currentLetterIndex + 1 == currentWord.letters.length) {
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentLetterIndex(0);
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    }
    setWords(wordsCopy);
    setWordIndex(currentWordIndex);
  };

  const handleRestart = () => {
    setCurrentWordIndex(0);
    setCurrentLetterIndex(0);
    fetchWords();
  };

  return {
    handleKeyPress,
    handleRestart,
    words,
    currentWordIndex,
    currentLetterIndex,
  };
};
