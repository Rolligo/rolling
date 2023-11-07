import * as S from "./Input.style";

function Input({
  isError,
  placeholder,
  errorMessage,
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
        inputValue={inputValue}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError && <S.InputError>{errorMessage}</S.InputError>}
    </>
  );
}

export default Input;
