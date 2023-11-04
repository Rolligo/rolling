import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { pretendard } from "assets/fonts/pretendard";
import { notoSans } from "assets/fonts/noto-sans";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${pretendard}
  ${notoSans}
`;

export default GlobalStyle;
