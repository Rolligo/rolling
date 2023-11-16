import React from "react";
import Card1 from "assets/images/card-img1.png";
import Card2 from "assets/images/card-img2.png";
import Card3 from "assets/images/card-img3.png";
import Emoji from "assets/images/Emoji.png";
import * as S from "./MainPage.style";
import NavBar from "components/NavBar";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import WebpImg from "components/WebpImg";
import WebpEmoji from "assets/images/EmojiWebp.webp";
import WebpCard1Img from "assets/images/card-img1-webp.webp";
import WebpCard2Img from "assets/images/card-img2-webp.webp";
import WebpCard3Img from "assets/images/card-img3-webp.webp";

function MainPage() {
  const navigate = useNavigate();

  function handleMovetoListClick(e) {
    e.preventDefault();
    navigate("/list");
  }

  return (
    <>
      <Helmet>
        <title>Rolling</title>
      </Helmet>
      <NavBar />
      <S.MainPageDiv>
        <S.Section>
          <S.DescriptionDiv>
            <S.PointDiv>Point. 01</S.PointDiv>
            <S.MainH1>
              누구나 손쉽게, 온라인
              <S.BrTag /> 롤링 페이퍼를 만들 수 있어요
            </S.MainH1>
            <S.MainH2>로그인 없이 자유롭게 만들어요.</S.MainH2>
          </S.DescriptionDiv>
          <S.ImgContainer>
            <S.ImgBox>
              <S.SingleDiv>
                <WebpImg
                  src={Card1}
                  webpSrc={WebpCard1Img}
                  alt={"카드1이미지"}
                  lazyMode={true}
                />
              </S.SingleDiv>
              <S.SingleDiv>
                <WebpImg
                  src={Card2}
                  webpSrc={WebpCard2Img}
                  alt={"카드2이미지"}
                  lazyMode={true}
                />
              </S.SingleDiv>
              <S.SingleDiv>
                <WebpImg
                  src={Card3}
                  webpSrc={WebpCard3Img}
                  alt={"카드3이미지"}
                  lazyMode={true}
                />
              </S.SingleDiv>
            </S.ImgBox>
          </S.ImgContainer>
        </S.Section>
        <S.Section flexdirection="row-reverse">
          <S.DescriptionDiv>
            <S.PointDiv>Point. 02</S.PointDiv>
            <S.MainH1>
              서로에게 이모지로 감정을
              <S.BrTag /> 표현해보세요
            </S.MainH1>
            <S.MainH2>롤링 페이퍼에 이모지를 추가할 수 있어요.</S.MainH2>
          </S.DescriptionDiv>
          <S.ImgContainer>
            <S.EmojiDiv>
              <WebpImg
                src={Emoji}
                webpSrc={WebpEmoji}
                alt={"이모지 webp 이미지"}
                lazyMode={true}
              />
            </S.EmojiDiv>
          </S.ImgContainer>
        </S.Section>
        <S.ButtonContainer>
          <Button size="full" onClick={(e) => handleMovetoListClick(e)}>
            구경해보기
          </Button>
        </S.ButtonContainer>
      </S.MainPageDiv>
    </>
  );
}

export default MainPage;
