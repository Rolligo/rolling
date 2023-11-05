import * as S from "./OutlinedButton.style";

function OutlinedButton({
  children = "", // children : 버튼 텍스트 내용 (Button's innerText)
  width = "auto",
  height = "auto",
  margin = 0,
  disabled = false,
  smallSize = false,
}) {
  return (
    <S.ButtonContainer
      width={width}
      margin={margin}
      height={height}
      disabled={disabled}
      smallSize={smallSize}
    >
      {/* <S.AddEmoji src={addEmoji} /> */}
      {children}
    </S.ButtonContainer>
  );
}

export default OutlinedButton;
