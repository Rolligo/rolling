import * as S from "./Input.style";

function Input({
  isError = false,
  placeholder,
  errorMessage = "값을 입력해 주세요.",
  inputValue,
  onChange,
  onBlur,
}) {
  return (
    <>
      <S.InputContainer
        type="text"
        error={isError}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError && <S.InputError>{errorMessage}</S.InputError>}
    </>
  );
}

export default Input;
