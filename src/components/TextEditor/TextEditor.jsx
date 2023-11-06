import React, { useEffect, useRef, useState } from "react";
import * as S from "./TextEditor.style";
import Bold from "assets/images/Bold.svg";
import Italic from "assets/images/Italic.svg";
const TextEditor = () => {
  const [text, setText] = useState("");
  const [isBoldClicked, setIsBoldClicked] = useState(false);
  const [isItalicClicked, setIsItalicClicked] = useState(false);
  const textRef = useRef(null);
  console.log("Rendering");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleBoldClick(e) {
    e.preventDefault();
    setIsBoldClicked(!isBoldClicked);
  }

  function handleItalicClick(e) {
    e.preventDefault();
    setIsItalicClicked(!isItalicClicked);
  }

  useEffect(() => {
    if (isBoldClicked) {
      textRef.current.style.fontWeight = "bold";
    } else {
      textRef.current.style.fontWeight = "400";
    }
  }, [isBoldClicked]);

  useEffect(() => {
    if (isItalicClicked) {
      textRef.current.style.fontStyle = "italic";
    } else {
      textRef.current.style.fontStyle = "normal";
    }
  }, [isItalicClicked]);

  return (
    <S.TextEditorContainer>
      <S.EditContainer>
        <S.Button onClick={(e) => handleBoldClick(e)}>
          <img src={Bold} />
        </S.Button>
        <S.Button onClick={(e) => handleItalicClick(e)}>
          <img src={Italic} />
        </S.Button>
      </S.EditContainer>
      <S.TextContainer
        ref={textRef}
        placeholder="I am your reach text editor."
        type="text-area"
        value={text}
        onChange={handleChange}
      />
    </S.TextEditorContainer>
  );
};

export default TextEditor;
