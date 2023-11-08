import { styled } from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { onTabletAndPc } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const DropdownContainer = styled.div`
  max-width: 32rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  ${onTabletAndPc} {
    width: 32rem;
  }
`;

export const ButtonContainer = styled.button`
  appearance: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  border-radius: 0.8rem;
  border-style: solid;
  border-width: ${({ active }) => (active ? 0.2 : 0.1)}rem;
  border-color: ${({ error, active }) =>
    error ? COLORS.ERROR : active ? COLORS.GRAY_500 : COLORS.GRAY_300};
  color: ${({ error, active }) =>
    error || active ? COLORS.GRAY_900 : COLORS.GRAY_500};
  ${FONT_STYLE.REGULAR_16};
  background: ${({ disabled }) => disabled && COLORS.GRAY_100};

  &:hover {
    border-color: ${COLORS.GRAY_500};
  }

  &:focus {
    outline: 0;
    border-color: ${COLORS.GRAY_500};
    color: ${COLORS.GRAY_900};
    border-width: 0.2rem;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: -0.4rem;
  color: ${COLORS.ERROR};
  ${FONT_STYLE.REGULAR_12};
`;

export const ListContainer = styled.ul`
  width: 100%;
  display: inline-flex;
  padding: 1rem 0.1rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.GRAY_300};
  background: ${COLORS.WHITE};
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  ${FONT_STYLE.REGULAR_16};

  ${ListContainer} &:hover {
    background: ${COLORS.GRAY_100};
  }
`;
