import styled from "styled-components";

const SingleImg = styled.img`
  width: ${(props) => (props.width ? props.width : "27.4vw")};
  height: auto;
`;

export default SingleImg;
