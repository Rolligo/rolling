import { css } from "styled-components";
import PRETENDARD_BLACK from "./Pretendard-Black.subset.woff2";
import PRETENDARD_EXTRA_BOLD from "./Pretendard-ExtraBold.subset.woff2";
import PRETENDARD_BOLD from "./Pretendard-Bold.subset.woff2";
import PRETENDARD_SEMI_BOLD from "./Pretendard-SemiBold.subset.woff2";
import PRETENDARD_MEDIUM from "./Pretendard-Medium.subset.woff2";
import PRETENDARD_REGULAR from "./Pretendard-Regular.subset.woff2";
import PRETENDARD_LIGHT from "./Pretendard-Light.subset.woff2";
import PRETENDARD_EXTRA_LIGHT from "./Pretendard-ExtraLight.subset.woff2";
import PRETENDARD_THIN from "./Pretendard-Thin.subset.woff2";

export const pretendard = css`
  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    font-display: swap;
    src:
      local("Pretendard Black"),
      url(${PRETENDARD_BLACK}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    font-display: swap;
    src:
      local("Pretendard ExtraBold"),
      url(${PRETENDARD_EXTRA_BOLD}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-display: swap;
    src:
      local("Pretendard Bold"),
      url(${PRETENDARD_BOLD}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-display: swap;
    src:
      local("Pretendard SemiBold"),
      url(${PRETENDARD_SEMI_BOLD}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-display: swap;
    src:
      local("Pretendard Medium"),
      url(${PRETENDARD_MEDIUM}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src:
      local("Pretendard Regular"),
      url(${PRETENDARD_REGULAR}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    font-display: swap;
    src:
      local("Pretendard Light"),
      url(${PRETENDARD_LIGHT}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    font-display: swap;
    src:
      local("Pretendard ExtraLight"),
      url(${PRETENDARD_EXTRA_LIGHT}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    font-display: swap;
    src:
      local("Pretendard Thin"),
      url(${PRETENDARD_THIN}) format("woff2");
  }
`;
