import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 0rem 1.6rem 0.1rem;
  max-width: 70.5rem;
`;

export const CustomQuill = styled(ReactQuill)`
  .ql-editor {
    min-height: 25rem;
  }

  .ql-toolbar {
    background-color: #eee;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  .ql-container {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;
