import * as S from "./Input.style";
import { useState } from "react";

function Input({
  placeholder, 
  isError, 
  errorMessage, 
  inputValue, 
  onChange, 
  onBlur,
}) {

  return(
    <>
      <S.InputContainer type="text" value={inputValue} onBlur={onBlur} onChange={onChange} placeholder={placeholder} />
      {isError && <S.InputError>{errorMessage}</S.InputError>}
    </>
  );
}

export default Input;