import styled from "styled-components";
import { COLORS } from "styles/palette";
import background from "assets/images/icons/arrowbutton-background.svg";

export const ButtonContainer = styled.button`
  width: 5.6rem;
  height: 5.7rem;
  flex-shrink: 0;
  fill: rgba(255, 255, 255, 0.9);
  stroke-width: 0.1rem;
  stroke: ${COLORS.GRAY_300};
  filter: drop-shadow(0 0.4rem 0.8rem rgba(0, 0, 0, 0.08));
  background-image: url(${background});
  backdrop-filter: blur(0.2rem);
  background-size: cover;
`;
