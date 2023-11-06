import React from "react";
import * as S from "./TextEditor.style";

const TextEditor = () => {
  return (
    <S.TextEditorContainer>
      <S.EditContainer>버튼 영역</S.EditContainer>
      <S.TextContainer placeholder="I am your reach text editor." />
    </S.TextEditorContainer>
  );
};

export default TextEditor;
