import styled from "styled-components";

const Wrapper = styled.section`
  .todo-list {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 68vh;
    margin: 0 auto;
    overflow-x: auto;
  }

  @media (min-width: 992px) {
    .todo-list {
      width: 90%;
      height: 72vh;
      overflow-x: auto;
      display: flex;
    }
  }
`;
export default Wrapper;
