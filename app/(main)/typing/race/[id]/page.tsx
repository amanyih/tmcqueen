"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import RaceLobby from "@/components/feature/RaceLobby";
import { WordsRequest } from "@/types";
import { useKeyPress } from "@/hooks";
import { usePracticeStore, useUIStore } from "@/store";
import RaceTypingComponent from "@/components/common/RaceTypingArea";
import { LiveChat, RacingResult } from "@/components/feature";
import { Modal } from "@/components/common";

const RacePage = () => {
  const {
    setCurrentWordIndex,
    setReset,
    countdown,
    subMode,
    restart,
    language,
    setLanguage,
    numbers,
    punctuation,
    reset,
  } = usePracticeStore();
  const [raceStarted, setRaceStarted] = useState(true);
  const { openModal } = useUIStore();

  useEffect(() => {
    openModal(
      "Result",
      <RacingResult
        resultData={{
          rank: 2,
          totalParticipants: 10,
          raceTitle: "Piston Cup",
          language: "English",
          publicRace: true,
          includesNumbers: false,
          includesPunctuation: true,
          timeTaken: "15s",
          accuracy: 0.93, // 93%
          wpm: 110,
          isWinner: true,
        }}
      />
    );
  }, []);

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

  const {
    handleKeyPress,
    handleRestart,
    words,
    currentWordIndex,
    currentLetterIndex,
  } = useKeyPress({
    setWordIndex: setCurrentWordIndex,
    wordRequest,
  });

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-9 gap-8 py-8 px-4">
      {/* Left Section: Main Content */}
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
