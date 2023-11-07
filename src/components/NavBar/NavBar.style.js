import styled from "styled-components";
import { COLORS } from "styles/palette";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.WHITE};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  white-space: nowrap;
  padding: 11px 0px;
`;

export const LogoImage = styled.img`
  width: 10.6rem;
  height: 4.2rem;
  display: flex;
  padding: 6px 0px;
  justify-content: center;
  align-items: center;
`;

export const BottomLine = styled.div`
  width: 1199px;
  height: 1px;
  flex-shrink: 0;
  background: #ededed;
`;
