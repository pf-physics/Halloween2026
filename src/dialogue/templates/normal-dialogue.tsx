import "./dialogue.css";
import { useCallback, useEffect, useRef, useState } from "react";
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

export type AnswerOption = {
  option: string[];
  response: string;
  valid: Boolean;
};

export type DialogueProps = {
  text: string | string[];
  image?: string;
  answers?: string[];
  answerOptions?: AnswerOption[];
  defaultAnswerOption?: string;
  audio?: any;
  isGlobal?: boolean;
  globalScene?: string;
  header?: string;
  resetFullScreen?: boolean;
  answerPoints?: number;
  stopAudio?: boolean;
  video_url?: string; // should be camelCase
  videoUrls?: string[];
};

const NormalDialogue = ({
  text,
  image,
  answers = [],
  answerOptions = [],
  defaultAnswerOption,
  audio,
  isGlobal = true,
  globalScene,
  resetFullScreen,
  header,
  answerPoints,
  stopAudio,
  video_url,
  videoUrls = [],
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
  const optionAnswerRequired = answerOptions.length > 0;
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
  const [validOption, setValidOption] = useState<Boolean>(false);
  const [optionTextResponse, setOptionTextResponse] = useState<
    string | undefined
  >(undefined);

  const handleNext = () => {
    setOptionTextResponse(undefined);

    if (optionAnswerRequired) {
      setAns("");
      if (validOption) {
        setValidOption(false);
        isGlobal ? globalIncIdx() : incIdx();
      } else {
        const targetAns = answerOptions.find((opt) =>
          opt.option.some((a) => ans.toLowerCase().includes(a.toLowerCase())),
        );
        if (targetAns !== undefined) {
          setOptionTextResponse(targetAns.response);
          if (targetAns.valid) {
            setValidOption(true);
          }
        } else if (defaultAnswerOption) {
          setOptionTextResponse(defaultAnswerOption);
        }
      }
    } else if (ansRequired) {
      if (answers.map((a) => ans.toLowerCase().includes(a.toLowerCase()))) {
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
    setOptionTextResponse(undefined);
    decIdx();
  };

  const handleReset = () => {
    setOptionTextResponse(undefined);
    jumpToCurrent();
  };

  useEffect(() => {
    let pressed = false; // simple re-entrancy guard
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      // ignore if typing in inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (pressed) return; // stop rapid repeats
      pressed = true;
      e.preventDefault();
      handleNext();
      setTimeout(() => (pressed = false), 200);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleNext]);

  return (
    <div>
      <Dialogue header={header} text={text} image={image} />
      {optionTextResponse && (
        <div className="dialogue-text">{optionTextResponse}</div>
      )}
      {video_url && (
        <video src={video_url} controls width="100%">
          Your browser does not support the video tag.
        </video>
      )}
      {videoUrls.map((url, i) => (
        <p key={i}>
          <video src={url} controls>
            Your browser does not support the video tag.
          </video>
        </p>
      ))}
      {((answers.length > 0 && ansRequired) ||
        (optionAnswerRequired && !validOption)) && (
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
