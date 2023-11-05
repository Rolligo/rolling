import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  border-radius: 20px;
  background: var(--Surface, #f6f8ff);
  padding: 2.4rem 0 6.2278rem 0;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 706px;
  }

  @media (min-width: 1200px) {
    padding: 60px 60px;
    width: 100%;
    max-width: 1140px;
    flex-direction: ${(props) =>
      props.flexdirection ? props.flexdirection : "row"};
    gap: 100px;
    justify-content: left;
  }
`;

export default Section;
