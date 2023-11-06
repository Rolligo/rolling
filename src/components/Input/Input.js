import * as S from "./Input.style";
import { useState } from "react";

function Input() {
  const [isError, setIsError] = useState(false);

  return(
    <>
      <S.InputContainer type="text" error={isError} placeholder="placeholder" />
      {isError && <S.InputError>Error message</S.InputError>}
    </>
  );
}

export default Input;