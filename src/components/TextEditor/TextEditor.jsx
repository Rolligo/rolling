import React, { useEffect, useRef, useState } from "react";
import * as S from "./TextEditor.style";
import Bold from "assets/images/Bold.svg";

const TextEditor = () => {
  const [text, setText] = useState("");
  const [isBoldClicked, setIsBoldClicked] = useState(false);
  const textRef = useRef(null);
  console.log("Rendering");
  function handleChange(e) {
    setText(e.target.value);
  }

  function handleBoldClick(e) {
    e.preventDefault();
    setIsBoldClicked(!isBoldClicked);
  }

  useEffect(() => {
    if (isBoldClicked) {
      textRef.current.style.fontWeight = "bold";
    } else {
      textRef.current.style.fontWeight = "400";
    }
  }, [isBoldClicked]);

  return (
    <S.TextEditorContainer>
      <S.EditContainer>
        <S.Button onClick={(e) => handleBoldClick(e)}>
          <img src={Bold} />
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
