import * as S from "./OutlinedButton.style";
import addEmoji from "assets/images/icons/add-emoticon.svg";

// ** OutlinedButton은 height에 따른 모양이 다르기 때문에 기본 height가 56이 아닌 다른 height으로 이용하고 싶다면
// 꼭 prop으로 width를 명시해주어야 합니다!! smallSize width=""를 같이 입력해주어야 해당 width에 맞는
// 형태로 작동하고 smallSize만 적어 줄 경우에는 width가 40인 경우로 적용 됩니다!

function OutlinedButton({
  children = "Enabled", // children : 버튼 텍스트 내용 (Button's innerText)
  margin = 0,
  disabled = false,
  smallSize = false,
  withEmoji = false,
  width = "100%",
  height = smallSize ? "4.0rem" : "5.6rem", //height{Num(56,40,36,28)},
}) {
  const calculatePadding = (height, withEmoji) => {
    if (withEmoji) {
      return height >= "4.0rem" ? "0.8rem" : "1.6rem";
    }
    switch (height) {
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
