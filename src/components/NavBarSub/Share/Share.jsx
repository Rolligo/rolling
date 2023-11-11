import Toasts from "components/Toasts";
import * as S from "./Share.style";
import useToast from "hooks/useToast";

function Share() {
  const [Toast, toggleToast] = useToast(2000);

  const copyLinkClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
    } catch (err) {
      console.error(err);
      return;
    }
    toggleToast("copyToClipboard");
  };
  return (
    <>
      <S.Container>
        <S.Button>카카오톡 공유</S.Button>
        <S.Button onClick={copyLinkClipBoard}>URL 공유</S.Button>
      </S.Container>
      <Toasts.Portal>{Toast}</Toasts.Portal>
    </>
  );
}

export default Share;
