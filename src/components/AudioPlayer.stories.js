import React from "react";

import { withKnobs, text } from "@storybook/addon-knobs";
import AudioPlayer from "@notebookdays/audio-player";

export default {
  title: "AudioPlayer",
  decorators: [withKnobs],
};

export const Sample = () => {
  const audioRef = React.useRef();
  const audioTimeStamp = text("audioTimeStamp", "1,2,3,4,5,6,7,9,11,14,15,16");
  const audioFile = text(
    "audioFile",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  );
  return (
    <>
      <button
        onClick={() => {
          console.log("Play clicked");
          audioRef &&
            audioRef.current &&
            typeof audioRef.current.handlePlay === "function" &&
            audioRef.current.handlePlay();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          console.log("Pause clicked");
          audioRef &&
            audioRef.current &&
            typeof audioRef.current.handlePause === "function" &&
            audioRef.current.handlePause();
        }}
      >
        Pause
      </button>
      <AudioPlayer
        ref={audioRef}
        audioFile={audioFile}
        audioTimeStamp={audioTimeStamp}
        onStop={() => {}}
        updateState={() => {}}
      />
    </>
  );
};
