import styled from "styled-components";
import { COLORS } from "styles/palette";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 999rem;
  border: 0.1rem solid ${COLORS.GRAY_300};
  background: rgba(255, 255, 255, 0.9);
`;
