import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { pretendard } from "assets/fonts/Pretendard";
import { notoSans } from "assets/fonts/Noto-Sans";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${pretendard}
  ${notoSans}
`;

export default GlobalStyle;
