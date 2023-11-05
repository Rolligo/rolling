import styled from "styled-components";

const BrTag = styled.br`
  display: none;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: inline;
  }
`;

export default BrTag;
