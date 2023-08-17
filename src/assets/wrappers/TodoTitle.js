import styled from "styled-components";

const Wrapper = styled.h3`
  .title-section {
    display: flex;
    width: 75vw;
    margin: 0 auto;
    padding: 2rem 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 992px) {
    .title-section {
      display: flex;
      width: 75vw;
      margin: 0 auto;
      padding: 2rem 0;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
  }
`;
export default Wrapper;
