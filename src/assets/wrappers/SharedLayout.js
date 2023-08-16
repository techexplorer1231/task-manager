import styled from "styled-components";

const Wrapper = styled.section`
  .todo {
    display: grid;
    grid-template-columns: 1fr;
  }
  .todo-list {
    width: 90vw;
    height: 80vh;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .todo-add {
    margin: 0 auto;
    padding: 2rem 0;
    width: 90vw;
  }

  @media (min-width: 992px) {
    .todo {
      grid-template-columns: auto 1fr;
    }
    .todo-list {
      width: 90%;
      height: 80vh;
    }
    .todo-add {
      width: 90%;
    }
  }
`;
export default Wrapper;
