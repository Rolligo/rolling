import React, { useState } from "react";
import * as S from "./PostMessagePage.style";
import Input from "components/Input";

const PostMessagePage = () => {
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
    setIsError(false);
  }

  function blurHandler(e) {
    if (inputValue === "") {
      setIsError(true);
    }
  }

  return (
    <S.PostMessagePageDiv>
      <S.Section>
        <S.H1>From.</S.H1>
        <Input
          isError={isError}
          placeholder="이름을 입력해 주세요."
          errorMessage="값을 입력해 주세요."
          inputValue={inputValue}
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => blurHandler(e)}
        />
      </S.Section>
    </S.PostMessagePageDiv>
  );
};

export default PostMessagePage;
