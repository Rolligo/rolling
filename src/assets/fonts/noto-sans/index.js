// source: https://github.com/TetraTheta/NotoSansKR-subset
import { css } from "styled-components";
import NOTO_SANS_REGULAR from "./NotoSansKR-Regular-subset.woff2";
import NOTO_SANS_BOLD from "./NotoSansKR-Bold-subset.woff2";

export const notoSans = css`
  @font-face {
    font-family: "NotoSans";
    font-weight: 400;
    src:
      local("Noto Sans CJK KR"),
      url(${NOTO_SANS_REGULAR}) format("woff2");
  }

  @font-face {
    font-family: "NotoSans";
    font-weight: 700;
    src:
      local("Noto Sans CJK KR Bold"),
      url(${NOTO_SANS_BOLD}) format("woff2");
  }
`;
