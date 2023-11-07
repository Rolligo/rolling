import * as S from "./PrimaryButton.style";

function PrimaryButton({
  children = "Enabled", // children : 버튼 텍스트 내용 (Button's innerText)
  width = "100%",
  margin = 0,
  disabled = false,
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
