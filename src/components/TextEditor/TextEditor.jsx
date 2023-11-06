import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as S from "./TextEditor.style";
import DOMPurify from "dompurify";
import "./Editor.css";
const TextEditor = ({ fontFamily = "Pretendard" }) => {
  const [text, setText] = useState("");
  const quillRef = useRef(null);

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

  function onChangeContents(contents) {
    setText(contents);
  }

  //페이지 컴포넌트에서 폰트 선택 state가 변경될 때 handleFontChange함수 호출
  function handleFontChange(ref) {
    ref.current.style.fontFamily = fontFamily;
  }

  useEffect(() => {
    handleFontChange(quillRef);
  }, [fontFamily]);

  return (
    <>
      <S.TextEditorContainer>
        <ReactQuill
          onChange={onChangeContents}
          modules={modules}
          formats={formats}
          placeholder="I am your reach text editor."
          ref={quillRef}
        />
      </S.TextEditorContainer>
      <S.TextEditorContainer>
        <div
          ref={quillRef}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(text),
          }}
          // 윗줄의 div 태그는 기능 동작을 위한 예시입니다.
          // 입력된 값을 사용할 컴포넌트에서 text, quillRef 변수를 prop으로 받고, 위의 div 태그의 내용처럼 사용하시면 됩니다.
        />
      </S.TextEditorContainer>
    </>
  );
};

export default TextEditor;
