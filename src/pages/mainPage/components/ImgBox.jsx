import styled from "styled-components";

const ImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    width: 550px;
    grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  }
`;

export default ImgBox;
