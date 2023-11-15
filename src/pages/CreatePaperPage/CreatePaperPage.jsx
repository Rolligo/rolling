import NavBar from "components/NavBar";
import * as S from "./CreatePaperPage.style";
import Input from "components/Input";
import checkedIcon from "assets/images/icons/checked-icon.png";
import { COLORS } from "styles/palette";
import { useEffect, useState, useRef } from "react";
import useRequest from "hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Button";
import { Helmet } from "react-helmet";

const ORANGE = COLORS.ORANGE_200;
const PURPLE = COLORS.PURPLE_200;
const GREEN = COLORS.GREEN_200;
const BLUE = COLORS.BLUE_200;

const COLORCHIP = [ORANGE, PURPLE, BLUE, GREEN];
const IMAGECHIP = [
  "https://ifh.cc/g/loHbF4.jpg",
  "https://ifh.cc/g/Go0RsT.jpg",
  "https://ifh.cc/g/2jD013.jpg",
  "https://ifh.cc/g/8oN4L4.jpg",
  //https://ifh.cc/g/qjkQjh.jpg
];

function ColorChip({ background, onClick, isSelected }) {
  return (
    <S.Chip background={background} onClick={onClick}>
      <S.CheckedIcon src={checkedIcon} visibility={isSelected} />
    </S.Chip>
  );
}

function ImageChip({ background, onClick, isSelected }) {
  return (
    <S.Chip background={background} onClick={onClick} image>
      <S.CheckedIcon src={checkedIcon} visibility={isSelected} />
    </S.Chip>
  );
}

function CreatePaperPage() {
  const COLOR_NAME = {
    "#ffe2ad": "beige",
    "#ecd9ff": "purple",
    "#b1e4ff": "blue",
    "#d0f5c3": "green",
  };

  // useStates
  const [selectedChip, setSelectedChip] = useState("");
  const [value, setValue] = useState("");
  const [isColor, setIsColor] = useState(true);
  const [isInputError, setIsInputError] = useState(false);
  const navigate = useNavigate();

  // 새로운 롤링 페이퍼 생성 대상 데이터
  const newRollingPerson = {
    name: value,
    backgroundColor: isColor ? COLOR_NAME[selectedChip] : "beige",
    backgroundImageURL: isColor ? null : selectedChip,
  };

  // event handlers
  const handleColorChipClick = (e) =>
    setSelectedChip(e.target.getAttribute("background"));

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (value) {
      setIsInputError(false);
    }
  };

  const { fetch } = useRequest({
    skip: true,
    options: {
      url: "recipients/",
      method: "post",
      header: {
        "Content-Type": "application/json",
      },
      data: newRollingPerson,
    },
  });

  const handleSubmitForm = async () => {
    const { error, data } = await fetch();
    if (!error) {
      console.log(data);
      alert("롤링 페이퍼가 성공적으로 생성되었습니다! ");
      navigate(`/post/${data.id}`);
    } else {
      alert("서버 오류로 롤링 페이퍼 생성에 실패했습니다.");
    }
  };

  const handleInputOnBlur = () => {
    if (!value) {
      setIsInputError(true);
    }
  };

  // useEffects
  useEffect(() => {}, [selectedChip]);
  useEffect(() => {}, [isColor]);

  return (
    <div>
      <Helmet>
        <title>롤링 페이퍼 생성 - Rolling</title>
        <meta
          name="description"
          content="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요!"
        />
        <meta
          property="og:image"
          content="https://codeit-part2-team4.github.io/assets/images/logo.png"
        />
        <meta property="og:title" content="롤링 페이퍼 생성 - Rolling" />
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
        <meta name="twitter:title" content="롤링 페이퍼 생성 - Rolling" />
        <meta
          name="twitter:description"
          content="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요!"
        />
      </Helmet>
      <S.Wrapper>
        <S.NavContainer>
          <NavBar showButton={false} />
        </S.NavContainer>
        <S.Container>
          <S.ToInputWrapper>
            <S.TitleText1>To.</S.TitleText1>
            <Input
              placeholder="받는 사람 이름을 입력해 주세요"
              value={value}
              onChange={handleInputChange}
              isError={isInputError}
              onBlur={handleInputOnBlur}
            ></Input>
          </S.ToInputWrapper>
          <div>
            <S.DescriptionWrapper>
              <S.TitleText2>배경화면을 선택해 주세요.</S.TitleText2>
              <S.SubText>
                컬러를 선택하거나, 이미지를 선택할 수 있습니다.
              </S.SubText>
            </S.DescriptionWrapper>
            <Button.Toggle setIsColor={setIsColor} />
          </div>
          <S.ColorChipContainer>
            {isColor &&
              COLORCHIP.map((background, index) => (
                <ColorChip
                  key={index}
                  background={background}
                  onClick={handleColorChipClick}
                  isSelected={selectedChip === background}
                />
              ))}
            {!isColor &&
              IMAGECHIP.map((background, index) => (
                <ImageChip
                  key={index}
                  background={background}
                  onClick={handleColorChipClick}
                  isSelected={selectedChip === background}
                />
              ))}
          </S.ColorChipContainer>
          <S.ButtonContainer>
            <Button size="full" disabled={!value} onClick={handleSubmitForm}>
              생성하기
            </Button>
          </S.ButtonContainer>
        </S.Container>
      </S.Wrapper>
    </div>
  );
}

export default CreatePaperPage;
