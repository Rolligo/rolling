import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as S from "./TextEditor.style";

const TextEditor = () => {
  const [text, setText] = useState("");
  function onChangeContents(contents) {
    setText(contents);
  }

  return (
    <>
      <S.TextEditorContainer>
        <ReactQuill onChange={onChangeContents} />
      </S.TextEditorContainer>
      <S.TextEditorContainer>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </S.TextEditorContainer>
    </>
  );
};

export default TextEditor;
