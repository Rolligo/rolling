import * as S from "./OutlinedButton.style";
import addEmoji from "assets/images/icons/add-emoticon.svg";

function OutlinedButton({
  children = "Enabled", // children : 버튼 텍스트 내용 (Button's innerText)
  margin = 0,
  disabled = false,
  smallSize = false,
  withEmoji = false,
  width = "auto",
  height = smallSize ? "4.0rem" : "5.6rem", //height{Num(56,40,36,28)},
}) {
  const calculatePadding = (height, withEmoji) => {
    if (withEmoji) {
      return height >= "4.0rem" ? "0.8rem" : "1.6rem";
    }
    switch (height) {
      //TODO: height 별 Object로 만들기
      case "5.6rem":
        return "1.4rem 2.4rem";
      case "4.0rem":
        return "0.8rem 1.6rem";
      case "3.6rem":
        return "0.6rem 1.6rem";
      case "2.8rem":
        return "0.2rem 1.6rem";
    }
  };

  return (
    <S.ButtonContainer
      width={width}
      margin={margin}
      height={height}
      disabled={disabled}
      smallSize={smallSize}
      withEmoji={withEmoji}
      padding={calculatePadding(height, withEmoji)}
    >
      <S.InnerTextWrapper smallSize={smallSize}>
        {smallSize && withEmoji && <img src={addEmoji} />}
        {children}
      </S.InnerTextWrapper>
    </S.ButtonContainer>
  );
}

export default OutlinedButton;
