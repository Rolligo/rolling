import styled from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 0rem 1.6rem 0.1rem;
  max-width: 70.5rem;
  ${onTablet} {
  }

  ${onPc} {
  }
`;
