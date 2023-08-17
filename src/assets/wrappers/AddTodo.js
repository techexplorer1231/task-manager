import styled from "styled-components";

const Wrapper = styled.header`
  .add-section {
    display: flex;
    width: 80vw;
    margin: 0 auto;
    padding: 0 auto;
    position: fixed;
    align-items: center;
    right: 3rem;
  }

  .add-section input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--primary-200);
    border-radius: 5px;
    height: 2.2rem;
    appearance: none;
  }
`;
export default Wrapper;
