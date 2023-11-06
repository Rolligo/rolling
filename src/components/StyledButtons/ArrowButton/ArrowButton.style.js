import styled from "styled-components";
import { COLORS } from "styles/palette";
import background from "assets/images/icons/arrowbutton-background.svg";

export const ButtonContainer = styled.button`
  width: 56px;
  height: 57px;
  flex-shrink: 0;
  fill: rgba(255, 255, 255, 0.9);
  stroke-width: 1px;
  stroke: ${COLORS.GRAY_300};
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  background-image: url(${background});
  backdrop-filter: blur(2px);
  background-size: cover;
`;
