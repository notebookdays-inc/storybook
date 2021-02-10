import React from "react";

import { Button } from "@material-ui/core";

import { withKnobs, object } from "@storybook/addon-knobs";
import PlayableText from "@notebookdays/playable-text";

export default {
  title: "PlayableText",
  decorators: [withKnobs],
};

export const Sample = () => {
  const textData = object("textData", {
    audioTimeStamp: "1,2,3,4,5,6,7,9,11,14,15,16",
    audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    translate:
      "Boy. Kanda (verse): Writing unknown words through pronunciation. You may have seen Dad, Mum, Grandpa, Grandma and other children kissing at home with lessons. Remember you may have kissed you in the same way. Here is a love affair. Set it up with your experience and see. Exterior Exterior 1. Coconut Nut Washing | Take and sell gold | | Weeping Lipstick Coral Drinks Shiva's Handloom | What to say? Bring Chanjaya Chandramana to Nilisande |",
    translit:
      "Boy. Kanda (verse): Writing unknown words through pronunciation. You may have seen Dad, Mum, Grandpa, Grandma and other children kissing at home with lessons. Remember you may have kissed you in the same way. Here is a love affair. Set it up with your experience and see. Exterior Exterior 1. Coconut Nut Washing | Take and sell gold | | Weeping Lipstick Coral Drinks Shiva's Handloom | What to say? Bring Chanjaya Chandramana to Nilisande |",
    content:
      "ಮನೆಯಲ್ಲಿ ಅಪ್ಪ , ಅಮ್ಮ , ಅಜ್ಜ , ಅಜ್ಜಿ ಮತ್ತಿತರರು ಮಕ್ಕಳನ್ನು ಪ್ರೀತಿ ಮಾತುಗಳಿಂದ ಮುದ್ದಿಸುವುದನ್ನು ನೀನು ನೋಡಿರಬಹುದು . ಅದೇ ರೀತಿ ನಿನ್ನನ್ನೂ ಮುದ್ದು ಮಾಡಿರಬಹುದು ನೆನಪಿಸಿಕೊ . ಇಲ್ಲಿ ಪ್ರೀತಿ ಮಾತುಗಳಿಂದ ಮುದ್ದಿಸುವ ಸಂದರ್ಭವಿದೆ . ಅದನ್ನು ನಿನ್ನ ಅನುಭವದೊಂದಿಗೆ ಹೊಂದಿಸಿ ನೋಡು . ",
  });
  const audioRef = React.useRef();
  return (
    <>
      <Button
        onClick={() => {
          console.log("Play clicked");
          audioRef &&
            audioRef.current &&
            typeof audioRef.current.handlePlay === "function" &&
            audioRef.current.handlePlay();
        }}
      >
        Play
      </Button>
      <Button
        onClick={() => {
          console.log("Pause clicked");
          audioRef &&
            audioRef.current &&
            typeof audioRef.current.handlePause === "function" &&
            audioRef.current.handlePause();
        }}
      >
        Pause
      </Button>
      <PlayableText
        audioRef={audioRef}
        showToolTip
        playOnHover
        textData={textData}
        variant="h3"
        align="center"
        style={{
          fontSize: 80,
          fontFamily: "Baloo Tamma 2",
          fontWeight: 800,
        }}
      ></PlayableText>
    </>
  );
};
