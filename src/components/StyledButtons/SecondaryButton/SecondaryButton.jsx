import * as S from "./SecondaryButton.style";

function PrimaryButton({
  children = "", // children : 버튼 텍스트 내용 (Button's innerText)
  width = "100%",
  margin = 0,
  disabled = true,
  smallSize = false,
}) {
  return (
    <S.ButtonContainer
      width={width}
      margin={margin}
      disabled={disabled}
      smallSize={smallSize}
    >
      {children}
    </S.ButtonContainer>
  );
}

export default PrimaryButton;
