import React from "react";
import Card1 from "assets/images/card-img1.png";
import Card2 from "assets/images/card-img2.png";
import Card3 from "assets/images/card-img3.png";
import Emoji from "assets/images/Emoji.png";
import * as S from "./MainPage.style";
import NavBar from "components/NavBar";
import PaperCard from "components/PaperCard";
import PrimaryButton from "components/StyledButtons/PrimaryButton";
import SecondaryButton from "components/StyledButtons/SecondaryButton";

const MainPage = () => {
  return (
    <S.MainPageDiv>
      <NavBar />
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
            <S.SingleImg src={Card1} alt="카드1이미지" />
            <S.SingleImg src={Card2} alt="카드2이미지" />
            <S.SingleImg src={Card3} alt="카드3이미지" />
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
          <S.EmojiImg src={Emoji} alt="이모지이미지" />
        </S.ImgContainer>
      </S.Section>
      <PrimaryButton>구경해보기</PrimaryButton>
    </S.MainPageDiv>
  );
};

export default MainPage;
