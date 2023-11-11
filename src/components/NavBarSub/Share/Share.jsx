import * as S from "./Share.style";
import { useEffect } from "react";
import useToast from "hooks/useToast";
import Toasts from "components/Toasts";

function Share() {
  const url = location.href;

  const [Toast, toggleToast] = useToast(2000);

  const copyLinkClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error(err);
      return;
    }
    toggleToast("copyToClipboard");
  };

  const { Kakao } = window;

  const shareToKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "ROLLING",
        description: "롤링 페이퍼 공유",
        imageUrl:
          "https://cdn.discordapp.com/attachments/1155018218507870219/1172820574066712676/logoIcon.jpg?ex=6561b546&is=654f4046&hm=40882979e6a0ea6b58e149ac3763b5a03f0f15a93b4a15055be17bd7cecca636&",
        link: {
          mobileWebUrl: url,
        },
      },
      buttons: [
        {
          title: "나도 보러 가기",
          link: {
            mobileWebUrl: url,
          },
        },
      ],
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("014f7aa5b4ac80b12ce4c83b35240a45");
  }, []);

  return (
    <>
      <S.Container>
        <S.Button onClick={shareToKakao}>카카오톡 공유</S.Button>
        <S.Button onClick={copyLinkClipBoard}>URL 공유</S.Button>
      </S.Container>
      <Toasts.Portal>{Toast}</Toasts.Portal>
    </>
  );
}

export default Share;
