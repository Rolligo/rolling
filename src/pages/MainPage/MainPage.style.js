import styled from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";

export const BrTag = styled.br`
  display: none;

  ${onTablet} {
    display: none;
  }

  ${onPc} {
    display: inline;
  }
`;

export const DescriptionDiv = styled.div`
  padding: 0 2.4rem 5rem 2.4rem;
`;

export const EmojiImg = styled.img`
  width: 85vw;
  height: auto;

  ${onTablet} {
    width: 70rem;
  }

  ${onPc} {
    width: 55rem;
  }
`;
export const ImgContainer = styled.div`
  position: relative;
  height: 25rem;
  overflow: hidden;
  ${onTablet} {
    height: 20rem;
  }

  ${onPc} {
    width: 55.8rem;
    height: 20rem;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  position: absolute;
  left: -16.3vw;

  ${onTablet} {
    position: static;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33%, auto));
    overflow: visible;
    left: 0;
  }

  ${onPc} {
    position: static;
    display: grid;
    width: 55rem;
    overflow: visible;
    grid-template-columns: repeat(auto-fill, minmax(33%, auto));
    left: 0;
  }
`;

export const SingleImg = styled.img`
  width: 40vw;
  height: auto;
  ${onTablet} {
    width: 23.7rem;
  }

  ${onPc} {
    width: 20rem;
  }
`;

export const MainH1 = styled.div`
  margin-bottom: 0.4rem;
  color: ${COLORS.GRAY_900};
  ${FONT_STYLE.BOLD_18}

  ${onTablet} {
    font-size: 2.4rem;
  }

  ${onPc} {
    font-size: 2.4rem;
  }
`;

export const MainH2 = styled.div`
  color: ${COLORS.GRAY_500};
  ${FONT_STYLE.REGULAR_15};

  ${onTablet} {
    font-size: 1.8rem;
  }

  ${onPc} {
    font-size: 1.8rem;
  }
`;

export const MainPageDiv = styled.main`
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${onTablet} {
    padding: 0 auto;
  }

  ${onPc} {
  }
`;

export const PointDiv = styled.div`
  display: flex;
  padding: 0.4rem 1.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background: ${COLORS.PURPLE_600};
  width: 9rem;
  height: 3.2rem;
  ${FONT_STYLE.BOLD_14};
  color: ${COLORS.WHITE};
  margin-bottom: 1.6rem;
`;

export const Section = styled.section`
  width: 100%;
  border-radius: 2rem;
  background: ${COLORS.SURFACE};
  padding: 2.4rem 0 6.2278rem 0;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;

  ${onTablet} {
    width: 70.6rem;
  }

  ${onPc} {
    padding: 6rem 6rem;
    width: 100%;
    max-width: 114rem;
    flex-direction: ${(props) =>
      props.flexdirection ? props.flexdirection : "row"};
    gap: 10rem;
    justify-content: left;
  }
`;
