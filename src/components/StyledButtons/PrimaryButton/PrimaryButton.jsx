import * as S from "./PrimaryButton.style";
import { useLocation } from "react-router-dom";

function PrimaryButton({
  children = "Enabled", // children : 버튼 텍스트 내용 (Button's innerText)
  width = "100%",
  margin = 0,
  disabled = false,
  smallSize = false,
  onClick,
}) {
  const currentPage = useLocation().pathname;
  const fixBtnWidthOnPC = currentPage === ("/" || "/list");

  return (
    <S.ButtonContainer
      width={width}
      margin={margin}
      disabled={disabled}
      smallSize={smallSize}
      fixBtnWidthOnPC={fixBtnWidthOnPC}
      onClick={onClick}
    >
      {children}
    </S.ButtonContainer>
  );
}

export default PrimaryButton;
