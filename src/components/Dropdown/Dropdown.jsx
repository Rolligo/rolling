import * as S from "./Dropdown.style";
import arrowDown from "assets/images/icons/arrow_down.svg";
import arrowUp from "assets/images/icons/arrow_top.svg";
import { useEffect, useRef, useState } from "react";

function Dropdown({ options, getSelectedValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const ref = useRef(null);

  const handleClickButton = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleClickListItem = (e) => {
    setSelectedValue(e.target.innerText);
    getSelectedValue(e.target.innerText);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <S.DropdownContainer>
      <S.ButtonContainer
        $active={isOpen}
        $error={isError}
        onClick={handleClickButton}
      >
        <p>{selectedValue}</p>
        {isOpen ? (
          <img src={arrowUp} alt="위 화살표" />
        ) : (
          <img src={arrowDown} alt="아래 화살표" />
        )}
      </S.ButtonContainer>
      {isError && <S.ErrorMessage>Error Message</S.ErrorMessage>}
      {isOpen && (
        <S.ListContainer ref={ref}>
          {options.map((value, index) => (
            <S.ListItem key={index} onClick={handleClickListItem}>
              {value}
            </S.ListItem>
          ))}
        </S.ListContainer>
      )}
    </S.DropdownContainer>
  );
}

export default Dropdown;
