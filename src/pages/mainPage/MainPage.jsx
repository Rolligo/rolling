import React from "react";
import MainPageDiv from "./components/MainPageDiv";
import Section from "./components/Section";
import DescriptionDiv from "./components/DescriptonDiv";
import PointDiv from "./components/PointDiv";
import MainH1 from "./components/MainH1";
import MainH2 from "./components/MainH2";
import ImgBox from "./components/ImgBox";
import card1 from "../../assets/images/card-img1.png";
import card2 from "../../assets/images/card-img2.png";
import card3 from "../../assets/images/card-img3.png";
import Emoji from "../../assets/images/Emoji.png";
import SingleImg from "./components/SingleImg";

const MainPage = () => {
  return (
    <MainPageDiv>
      {/* 네비게이션 바 태그 여기에 위치해주세요! */}
      <Section>
        <DescriptionDiv>
          <PointDiv>Point. 01</PointDiv>
          <MainH1>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</MainH1>
          <MainH2>로그인 없이 자유롭게 만들어요.</MainH2>
        </DescriptionDiv>
        <ImgBox>
          <SingleImg src={card1} alt="카드1이미지" />
          <SingleImg src={card2} alt="카드2이미지" />
          <SingleImg src={card3} alt="카드3이미지" />
        </ImgBox>
      </Section>
      <Section>
        <DescriptionDiv>
          <PointDiv>Point. 02</PointDiv>
          <MainH1>서로에게 이모지로 감정을 표현해보세요</MainH1>
          <MainH2>로그인 없이 자유롭게 만들어요.</MainH2>
        </DescriptionDiv>
        <SingleImg width="85vw" src={Emoji} alt="이모지이미지" />
      </Section>
      {/* 구경해보기 버튼 여기에 위치해주세요! */}
    </MainPageDiv>
  );
};

export default MainPage;
