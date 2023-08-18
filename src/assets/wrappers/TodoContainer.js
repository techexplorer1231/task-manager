import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 auto 1;
  padding: 0 1rem;

  @media (min-width: 992px) {
    display: flex;
    padding: 0 5rem;
  }
`;

export default Wrapper;
