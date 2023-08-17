import styled from "styled-components";

const Wrapper = styled.section`
  .todo {
    display: grid;
    grid-template-columns: 1fr;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 75vh;
    margin: 0 auto;
  }

  .todo-add {
    margin: 0 auto;
    padding: 2rem 0;
    width: 90vw;
    background: var(--grey-100);
  }

  @media (min-width: 992px) {
    .todo {
      grid-template-columns: auto 1fr;
    }
    .todo-list {
      width: 90%;
      height: 75vh;
    }
    .todo-add {
      width: 90%;
    }
  }
`;
export default Wrapper;
