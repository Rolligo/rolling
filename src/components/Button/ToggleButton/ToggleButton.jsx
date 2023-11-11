import * as S from "./ToggleButton.style";
import { useState } from "react";

const BUTTON_TEXT = {
  left: "컬러",
  right: "이미지",
};

function ToggleButton({ setIsColor }) {
  const [selectedText, setSelectedText] = useState(BUTTON_TEXT.left);

  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);

    setTimeout(() => {
      setSelectedText((prevText) =>
        prevText === BUTTON_TEXT.left ? BUTTON_TEXT.right : BUTTON_TEXT.left
      );
    }, 200);

    setIsColor(toggle);
  };
  return (
    <div>
      <S.ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <S.Selected toggle={toggle}>{selectedText}</S.Selected>
        <S.Container toggle={toggle}>
          <S.Text toggle={toggle}>{BUTTON_TEXT.left}</S.Text>
        </S.Container>
        <S.Container toggle={!toggle}>
          <S.Text toggle={!toggle}>{BUTTON_TEXT.right}</S.Text>
        </S.Container>
      </S.ToggleBtn>
    </div>
  );
}

export default ToggleButton;
