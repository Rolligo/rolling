import styled from "styled-components";
import { COLORS } from "styles/palette";
import { FONT_STYLE } from "styles/fontStyle";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
  border-bottom: 0.1rem solid ${COLORS.GRAY_200};
`;

export const ToContainer = styled.div`
  width: 100%;
  color: ${COLORS.GRAY_800};
  ${FONT_STYLE.BOLD_18};
`;

export const HeaderService = styled.div`
  width: 100%;
  padding: 0.8rem 2rem;
  display: flex;
  gap: 0.2rem;
  border-bottom: 0.1rem solid ${COLORS.GRAY_200};

`;

export const EmojiWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Button = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmojiContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-item: center;
`;

export const Border = styled.div`
  background-color: ${COLORS.GRAY_200};
  width: 1px;
  height: 2.8rem;
  margin: auto 0;
`;