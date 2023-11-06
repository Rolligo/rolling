import * as S from "./Toasts.style";
import ReactDOM from "react-dom";
import COMPLETED from "assets/icons/completed.svg";
import CLOSE from "assets/icons/close.svg";

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
