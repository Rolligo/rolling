import * as S from "./Toasts.style";
import ReactDOM from "react-dom";
import COMPLETED from "assets/icons/completed.svg";
import CLOSE from "assets/icons/close.svg";

function Toast() {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={COMPLETED} />
        <span>URL이 복사 되었습니다.</span>
      </S.Wrapper>
      <button>
        <img src={CLOSE} />
      </button>
    </S.Container>
  );
}

function Portal({ children }) {
  const toastElement = document.querySelector("#toast");
  return ReactDOM.createPortal(children, toastElement);
}

Toast.Portal = Portal;

export default Toast;
