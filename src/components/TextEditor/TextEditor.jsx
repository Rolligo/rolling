import React, { useMemo } from "react";
import * as S from "./TextEditor.style";

const TextEditor = ({ onChangeContents }) => {
  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "color",
    "background",
    "size",
    "h1",
  ];

  const modules = useMemo(() => {
    return {
      toolbar: {
        background: "black",
        container: [
          ["bold", "italic", "underline"],
          [{ align: [] }],
          [{ list: "bullet" }, { list: "ordered" }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  return (
    <S.TextEditorContainer>
      <S.CustomQuill
        onChange={onChangeContents}
        modules={modules}
        formats={formats}
        placeholder="I am your reach text editor."
      />
    </S.TextEditorContainer>
  );
};

export default TextEditor;
