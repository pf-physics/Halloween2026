import "./dialogue.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button } from "@mui/material";
import Dialogue from "./dialogue";
import {
  useIncIndex,
  useDecIndex,
  useIncAllIndices,
  useJumpToCurrent,
} from "../../hooks/indexHooks";
import { setAudio } from "../../store/audioSlice";
import { useSetGlobalScene } from "../../hooks/common";
import { setFullScreen } from "../../store/miscSlice";
import { useIncPoints } from "../../hooks/pointsHooks";

export type DialogueProps = {
  text: string | string[];
  image?: string;
  answers?: string[];
  audio?: any;
  isGlobal?: boolean;
  globalScene?: string;
  header?: string;
  resetFullScreen?: boolean;
  answerPoints?: number;
  stopAudio?: boolean;
};

const NormalDialogue = ({
  text,
  image,
  answers = [],
  audio,
  isGlobal = true,
  globalScene,
  resetFullScreen,
  header,
  answerPoints,
  stopAudio,
}: DialogueProps) => {
  const index = useAppSelector((state) => state.index.value);
  const playerIndex = useAppSelector((state) => state.playerIndex.value);
  const incIdx = useIncIndex();
  const globalIncIdx = useIncAllIndices();
  const decIdx = useDecIndex();
  const jumpToCurrent = useJumpToCurrent();
  const incPoints = useIncPoints();
  const ansRequired =
    playerIndex !== undefined &&
    index !== undefined &&
    !(playerIndex < index) &&
    answers.length > 0;
  const dispatch = useAppDispatch();
  const setGlobalScene = useSetGlobalScene();

  useEffect(() => {
    if (resetFullScreen) {
      dispatch(setFullScreen(false));
    }
  }, []);

  useEffect(() => {
    if (globalScene !== undefined) {
      setGlobalScene(globalScene);
    }
  }, [index]);

  useEffect(() => {
    if (audio !== undefined) {
      dispatch(setAudio(audio));
    } else if (stopAudio) {
      dispatch(setAudio(undefined));
    }
  }, [playerIndex]);

  const [ans, setAns] = useState<string>("");

  const handleNext = () => {
    if (ansRequired) {
      if (answers.map((a) => a.toLowerCase()).includes(ans.toLowerCase())) {
        setAns("");
        if (answerPoints) {
          incPoints(answerPoints, "answer");
        }
        isGlobal ? globalIncIdx() : incIdx();
      }
    } else {
      isGlobal ? globalIncIdx() : incIdx();
    }
  };

  const handleBack = () => {
    decIdx();
  };

  const handleReset = () => {
    jumpToCurrent();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up on unmount or when `value` changes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerIndex]);

  return (
    <div>
      <Dialogue header={header} text={text} image={image} />
      {answers.length > 0 && ansRequired && (
        <input
          value={ans}
          autoFocus
          onChange={(e) => setAns(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleNext();
            }
          }}
        />
      )}
      <div className="buttons-row">
        <Button
          color="primary"
          variant="contained"
          size={"large"}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          size={"large"}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
      <div className="reset-index-row">
        <Button
          color="primary"
          variant="contained"
          size={"large"}
          onClick={handleReset}
        >
          Jump to current
        </Button>
      </div>
    </div>
  );
};

export default NormalDialogue;
