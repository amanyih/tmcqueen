"use client";

import { useState } from "react";
import RaceLobby from "@/components/feature/RaceLobby";
import { WordsRequest } from "@/types";
import { useKeyPress } from "@/hooks";
import { usePracticeStore } from "@/store";
import RaceTypingComponent from "@/components/common/RaceTypingArea";
import { LiveChat } from "@/components/feature";
import { Modal } from "@/components/common";

const RacePage = () => {
  const { setCurrentWordIndex, subMode, language, numbers, punctuation } =
    usePracticeStore();
  const [raceStarted, setRaceStarted] = useState(true);

  const [participants] = useState([
    "Amanuel Yihune",
    "Shad Mirza",
    "John Doe",
    "Jane Doe",
  ]);

  const [wordRequest, setWordRequest] = useState<WordsRequest>({
    count: subMode as number,
    language: language,
    numbers: numbers,
    punctuation,
  });

  const { words, currentWordIndex, currentLetterIndex } = useKeyPress({
    setWordIndex: setCurrentWordIndex,
    wordRequest,
  });

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-9 gap-8 py-8 px-4">
      <div className="col-span-7">
        {!raceStarted ? (
          <RaceLobby />
        ) : (
          <RaceTypingComponent
            words={words}
            currentWordIndex={currentWordIndex}
            currentLetterIndex={currentLetterIndex}
            raceTitle={"Piston Cup"}
            userRank={1}
            totalParticipants={participants.length}
          />
        )}
      </div>

      <LiveChat />
      <Modal></Modal>
    </div>
  );
};

export default RacePage;
