import * as S from "./Toasts.style";
import ReactDOM from "react-dom";
import CLOSE from "assets/images/icons/close.svg";

function Toasts({ children, closeToast }) {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
      <button onClick={closeToast}>
        <img src={CLOSE} />
      </button>
    </S.Container>
  );
}

function Portal({ children }) {
  const toastElement = document.querySelector("#toast");
  return ReactDOM.createPortal(children, toastElement);
}

Toasts.Portal = Portal;

export default Toasts;
