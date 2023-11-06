import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as S from "./TextEditor.style";
const TextEditor = () => {
  return (
    <>
      <S.TextEditorContainer>
        <ReactQuill />
      </S.TextEditorContainer>
    </>
  );
};

export default TextEditor;
