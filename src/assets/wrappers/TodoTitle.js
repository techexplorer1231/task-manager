import styled from "styled-components";

const Wrapper = styled.h3`
  .title-section {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .todo-title {
    width: 80vw;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.5s ease-in-out, border-bottom-color 0.5s ease-in-out;

    &:hover {
      border-bottom: solid 2px var(--primary-400);
      cursor: pointer;
    }
  }

  @media (min-width: 992px) {
    .title-section {
      display: flex;
      padding: 2rem 0;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    .todo-title {
      width: 30vw;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
export default Wrapper;
