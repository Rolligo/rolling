import styled from "styled-components";
import { COLORS } from "styles/palette";

export const ButtonContainer = styled.button`
  display: flex;
  height: 42px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${COLORS.GRAY_300};
  background: ${COLORS.WHITE};
`;
