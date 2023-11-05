import { styled } from "styled-components";
import { COLORS } from "styles/palette";

export const DropdownContainer = styled.div`
  width: 32rem;
  margin: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ButtonContainer = styled.button`
  appearance: none;
  display: flex;
  justify-content: space-between;
  width: 32rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  border-radius: 0.8rem;
  border-style: solid;
  border-width: ${({ active }) => (active ? 0.2 : 0.1)}rem;
  border-color: ${({ error, active }) =>
    error ? COLORS.ERROR : active ? COLORS.GRAY_500 : COLORS.GRAY_300};
  color: ${({ error, active }) =>
    error || active ? COLORS.GRAY_900 : COLORS.GRAY_500};
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
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
  font-size: 1.2rem;
  line-height: 150%;
  letter-spacing: -0.006rem;
`;

export const ListContainer = styled.ul`
  width: 32rem;
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
  width: 31.6rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;

  ${ListContainer} &:hover {
    background: ${COLORS.GRAY_100};
  }
`;
