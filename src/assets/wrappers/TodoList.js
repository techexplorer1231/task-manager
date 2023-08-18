import styled from "styled-components";

const Wrapper = styled.section`
  .todo-list {
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow-x: auto;
  }

  @media (min-width: 992px) {
    .todo-list {
      height: 70vh;
      overflow-x: auto;
      display: flex;
    }
  }
`;
export default Wrapper;
