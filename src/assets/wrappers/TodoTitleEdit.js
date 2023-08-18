import styled from "styled-components";

const Wrapper = styled.header`
  .form-section {
    display: flex;
    margin: 0 auto;
    padding: 2rem 0;
    justify-content: space-between;
  }

  .form-section input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--primary-200);
    border-radius: 0.5rem;
    height: 2.2rem;
    appearance: none;
  }
`;
export default Wrapper;
