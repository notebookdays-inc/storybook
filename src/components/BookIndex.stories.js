import React from "react";

import { Button } from "@material-ui/core";

import { withKnobs, text, object } from "@storybook/addon-knobs";
import { BookIndex } from "@notebookdays/react-components";

import BookData from "./data/Book.json";

export default {
  title: "BookIndex",
  decorators: [withKnobs],
};

export const Sample = () => {
  const formattedBookData = BookData.chapters.map((chapter) => {
    const textData = {
      audioTimeStamp: "",
      audioFile: "",
      translate: "",
      translit: "",
      content: chapter.title.content,
    };
    const progress = Math.random() * 100;
    return { textData, progress };
  });

  const tableOfContents = object("tableOfContents", formattedBookData);

  const headingTextData = object("headingTextData", {
    audioTimeStamp: "",
    audioFile: "",
    translate: "",
    translit: "",
    content: "Heading Text",
  });
  const subHeadingTextData = object("subHeadingTextData", {
    audioTimeStamp: "",
    audioFile: "",
    translate: "",
    translit: "",
    content: "Sub Heading Text",
  });
  return (
    <>
      <BookIndex
        headingTextData={headingTextData}
        subHeadingTextData={subHeadingTextData}
        tableOfContents={tableOfContents}
        onSelectChapter={(index) => {
          console.log("onSelectChapter: called");
          console.log(BookData.chapters[index]);
        }}
      />
    </>
  );
};
