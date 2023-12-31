import React, { useEffect, useRef, useState } from "react";
import * as S from "./CreateMessagePage.style";
import Input from "components/Input";
import TextEditor from "components/TextEditor";
import DefaultProfile from "assets/images/DefaultProfile.png";
import Dropdown from "components/Dropdown";
import NavBar from "components/NavBar";
import { Button } from "components/Button";
import useRequest from "hooks/useRequest";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import loadingImg from "assets/images/loading.png";
import WebpImg from "components/WebpImg";
import DefaultProfileWebp from "assets/images/DefaultProfile.webp";
const RELATIONSHIP = ["지인", "친구", "동료", "가족"];

const FONT_SELECT = [
  "Noto Sans",
  "Pretendard",
  "나눔명조",
  "나눔손글씨 손편지체",
];

const imageUrls = [
  "https://fastly.picsum.photos/id/1082/100/100.jpg?hmac=0rTbHjwuEo-KpMp2E4aCa2JWXFT_FPh6cqJwhTxcZl4",
  "https://fastly.picsum.photos/id/494/100/100.jpg?hmac=VY3bkvgk7NyiVsjLJ0_OBS_e_LWCFTrPEvndz6syOFQ",
  "https://fastly.picsum.photos/id/437/100/100.jpg?hmac=-YlB-diqK8qqcHK263TJ4YfCVbAlzbaLJECUuGfg55s",
  "https://fastly.picsum.photos/id/859/100/100.jpg?hmac=6QkQ5r5_o7xGLBIk04B6BGnYhczjRVVUHfgwEZBCtyk",
  "https://fastly.picsum.photos/id/522/100/100.jpg?hmac=qAjkBTDli2R3PAxAqv8HwfHWmdQskKVWNSDktu4tmHw",
  "https://fastly.picsum.photos/id/268/100/100.jpg?hmac=eqOIwP24u5Z5zeRyWxuRm-47F6O4HGh_2t7ydnCLB1g",
  "https://fastly.picsum.photos/id/1064/100/100.jpg?hmac=ctylrOJlV6YpNYdxeSheUqNNZD7goTpAQjnF_ubkrPw",
  "https://fastly.picsum.photos/id/547/100/100.jpg?hmac=GzEraiphe5k-m_Ika-BtHcx4xDxuRPW2LTQFzHjAyy4",
  "https://fastly.picsum.photos/id/571/100/100.jpg?hmac=-fQ3pFGoTNXsXIgWPhYe3lTadQTWlLh5J1Xzc9vmlQE",
  "https://fastly.picsum.photos/id/866/100/100.jpg?hmac=ci1nxrYzr9SaVQenyuqBybKgVslILw_KRPf-cZjq4yg",
];
const defaultImageUrl = "https://ifh.cc/g/nt96P0.png";

const CreateMessagePage = () => {
  const [isError, setIsError] = useState(false);
  const [inputNameValue, setInputNameValue] = useState("");
  const [isSingleImgClicked, setIsSingleImgClicked] = useState(false);
  const [singleUrl, setSingleUrl] = useState("");
  const [isDefaultImgClicked, setIsDefaultImgClicked] = useState(true);
  const [selectedRelationValue, setSelectedRelationValue] = useState(
    RELATIONSHIP[0]
  );
  const [selectedFontValue, setSelectedFontValue] = useState(FONT_SELECT[0]);
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEditorEmpty, setIsEditorEmpty] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState();

  function handleInputChange(e) {
    e.preventDefault();
    setInputNameValue(e.target.value);
    setIsError(false);
  }

  function blurHandler(e) {
    if (inputNameValue === "") {
      setIsError(true);
    }
  }

  function handleSingleImgClick(e, url) {
    e.preventDefault();

    if (e.target.src === url) {
      setSingleUrl(url);
      setIsSingleImgClicked(true);
      setIsDefaultImgClicked(false);
    }
  }

  function handleDefaultImgClick(e) {
    e.preventDefault();
    setIsDefaultImgClicked(true);
    setIsSingleImgClicked(false);
    setSingleUrl("");
  }

  function getSelectedValue(innerText) {
    setSelectedRelationValue(innerText);
  }

  function getFontSelectedValue(innerText) {
    setSelectedFontValue(innerText);
  }

  function onChangeContents(contents) {
    setText(contents);
    if (contents === "<p><br></p>") {
      setIsEditorEmpty(true);
    } else {
      setIsEditorEmpty(false);
    }
  }

  useEffect(() => {
    if (inputNameValue !== "" && !isEditorEmpty) {
      setIsDisabled(false);
    } else if (inputNameValue === "" || isEditorEmpty) {
      setIsDisabled(true);
    }
  }, [inputNameValue, isEditorEmpty]);

  const message = {
    sender: inputNameValue,
    relationship: selectedRelationValue,
    content: text,
    font: selectedFontValue,
    profileImageURL: singleUrl !== "" ? singleUrl : defaultImageUrl,
  };

  const { fetch } = useRequest({
    skip: true,
    options: {
      url: `recipients/${id}/messages/`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: message,
    },
  });

  async function handleCreatePostClick(e) {
    e.preventDefault();
    setLoading(true);
    const { error: fetchedError } = await fetch();
    if (fetchedError === undefined) {
      setLoading(false);
      navigate(`/post/${id}`);
    } else {
      alert("서버 오류로 메시지 작성에 실패했습니다.");
      navigate("/list");
    }
  }

  return (
    <>
      <Helmet>
        <title>메세지 생성 - Rolling</title>
        <meta
          name="description"
          content="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요!"
        />
        <meta
          property="og:image"
          content="https://codeit-part2-team4.github.io/assets/images/logo.png"
        />
        <meta property="og:title" content="메세지 생성 - Rolling" />
        <meta
          property="og:description"
          content="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요!"
        />
        <meta
          property="og:url"
          content="https://codeit-part2-team4.github.io/rolling/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://codeit-part2-team4.github.io/assets/images/logo.png"
        />
        <meta name="twitter:title" content="메세지 생성 - Rolling" />
        <meta
          name="twitter:description"
          content="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요!"
        />
      </Helmet>
      <NavBar showButton={false} />
      <S.CreateMessagePageDiv>
        <S.Section>
          <S.H1>From.</S.H1>
          <Input
            isError={isError}
            placeholder="이름을 입력해 주세요."
            errorMessage="값을 입력해 주세요."
            inputValue={inputNameValue}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => blurHandler(e)}
          />
        </S.Section>
        <S.Section>
          <S.H1>프로필 이미지</S.H1>
          <S.ImgDiv>
            <S.ChosenImgDiv>
              <S.DefaultImage
                src={isSingleImgClicked ? singleUrl : DefaultProfile}
              />
            </S.ChosenImgDiv>
            <S.Div>
              <S.H2>프로필 이미지를 선택해주세요!</S.H2>
              <S.ImgContainer>
                <S.SingleImageButton onClick={(e) => handleDefaultImgClick(e)}>
                  <S.SingleDiv>
                    <WebpImg
                      src={defaultImageUrl}
                      webpSrc={DefaultProfileWebp}
                      alt={"기본 이미지"}
                      lazyMode={true}
                    />
                  </S.SingleDiv>
                </S.SingleImageButton>
                {imageUrls.map((url) => {
                  return (
                    <S.SingleImageButton
                      key={url}
                      onClick={(e) => handleSingleImgClick(e, url)}
                    >
                      <S.SingleImg src={url} />
                    </S.SingleImageButton>
                  );
                })}
              </S.ImgContainer>
            </S.Div>
          </S.ImgDiv>
        </S.Section>
        <S.Section>
          <S.H1>상대와의 관계</S.H1>
          <Dropdown
            options={RELATIONSHIP}
            getSelectedValue={getSelectedValue}
          />
        </S.Section>
        <S.Section>
          <S.H1>내용을 입력해 주세요</S.H1>
          <TextEditor onChangeContents={onChangeContents} />
        </S.Section>
        <S.Section>
          <S.H1>폰트 선택</S.H1>
          <Dropdown
            options={FONT_SELECT}
            getSelectedValue={getFontSelectedValue}
          />
        </S.Section>
        <S.Section>
          <Button
            size="lg"
            onClick={(e) => handleCreatePostClick(e)}
            disabled={isDisabled}
          >
            {loading ? <S.LoadingImg src={loadingImg} /> : "생성하기"}
          </Button>
        </S.Section>
      </S.CreateMessagePageDiv>
    </>
  );
};

export default CreateMessagePage;
