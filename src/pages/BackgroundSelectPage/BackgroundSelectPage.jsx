import NavBar from "components/NavBar";
import * as S from "./BackgroundSelectPage.style";
import ToggleButton from "components/StyledButtons/ToggleButton";
import PrimaryButton from "components/StyledButtons/PrimaryButton";
import Input from "components/Input";
import checkedIcon from "assets/images/icons/checked-icon.png";
import { COLORS } from "styles/palette";
import { useEffect, useState } from "react";
import imageChip1 from "assets/images/imagechip-1.jpg";
import imageChip2 from "assets/images/imagechip-2.jpg";
import imageChip3 from "assets/images/imagechip-3.jpg";
import imageChip4 from "assets/images/imagechip-4.jpg";
import useRequest from "hooks/useRequest";

const ORANGE = COLORS.ORANGE_200;
const PURPLE = COLORS.PURPLE_200;
const GREEN = COLORS.GREEN_200;
const BLUE = COLORS.BLUE_200;

const COLORCHIP = [ORANGE, PURPLE, BLUE, GREEN];
const IMAGECHIP = [imageChip1, imageChip2, imageChip3, imageChip4];

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

function BackgroundSelectPage() {
  const COLOR_NAME = {
    "#ffe2ad": "beige",
    "#ecd9ff": "purple",
    "#b1e4ff": "blue",
    "#d0f5c3": "green",
  };

  const getImgSrc = (imgPath) => {
    if (imgPath.indexOf("imagechip-1")) return "https://ifh.cc/g/LMjp5Q.jpg";
    if (imgPath.indexOf("imagechip-2")) return "https://ifh.cc/g/9LLavj.jpg";
    if (imgPath.indexOf("imagechip-3")) return "https://ifh.cc/g/7QKVfm.jpg";
    if (imgPath.indexOf("imagechip-4")) return "https://ifh.cc/g/Zw6WCW.jpg";
  };

  const [selectedChip, setSelectedChip] = useState("");
  const [value, setValue] = useState("");
  const [isColor, setIsColor] = useState(true);
  const [backgroundImageURL, setBackgroundImageURL] = useState("");

  // backgroundImgURL: !isColor ? URL.createObjectURL(selectedChip) : null,
  const newRollingPerson = {
    name: value,
    backgroundColor: isColor ? COLOR_NAME[selectedChip] : "beige",
    backgroundImageURL: getImgSrc(selectedChip),
  };
  console.log(imageChip1);

  // function foo(data) {
  //   const blob = new Blob(data, { type: "image/png" });
  //   const createdImgUrl = window.URL.createObjectURL(new Blob(blob));
  //   return createdImgUrl;
  // }

  const { data, refetch } = useRequest({
    skip: true,
    url: "recipients/",
    method: "post",
    header: {
      "Content-Type": "application/json",
    },
    data: newRollingPerson,
  });

  useEffect(() => {}, [selectedChip]);
  useEffect(() => {}, [isColor]);

  const handleColorChipClick = (e) =>
    setSelectedChip(e.target.getAttribute("background"));

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  // const getSelectedType = (selectedType) => setSelectedType(selectedType);

  async function aa(imageURL) {
    const res = await fetch(imageURL);
    const blob = await res.blob();
    const createdImgUrl = window.URL.createObjectURL(new Blob([blob]));
    setBackgroundImageURL(createdImgUrl.substring(5));
    console.log(backgroundImageURL);

    refetch();
    console.log(createdImgUrl);
  }

  const handleSubmitForm = () => {
    // aa(getImgSrc(selectedChip));
    refetch();

    // const newPaper = {
    //   name: value,
    //   backgroundColor: background,
    //   backgroundImageURL: "www.naver.com",
    // };

    // const { data } = useRequest({
    //   url: "recipients/",
    //   method: "post",
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     ...newPaper,
    //   },
    // });
    // console.log(data);
  };

  // console.log(data);

  // POST https://rolling-api.vercel.app/0-3/recipients/
  // Content-Type: application/json

  // {
  // 	"name": "강영훈",
  //   "backgroundColor": "purple"
  // }

  return (
    <div>
      <NavBar showButton={false} />
      <S.Wrapper>
        <S.Container>
          <S.ToInputWrapper>
            <S.TitleText1>To.</S.TitleText1>
            <Input
              placeholder="받는 사람 이름을 입력해 주세요"
              value={value}
              onChange={handleInputChange}
            ></Input>
          </S.ToInputWrapper>
          <div>
            <S.DescriptionWrapper>
              <S.TitleText2>배경화면을 선택해 주세요.</S.TitleText2>
              <S.SubText>
                컬러를 선택하거나, 이미지를 선택할 수 있습니다.
              </S.SubText>
            </S.DescriptionWrapper>
            <ToggleButton setIsColor={setIsColor} />
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
          <PrimaryButton
            margin="2.4rem 0"
            disabled={!value}
            onClick={handleSubmitForm}
          >
            생성하기
          </PrimaryButton>
        </S.Container>
      </S.Wrapper>
    </div>
  );
}

export default BackgroundSelectPage;
