import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  .todo-item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    animation: ${fadeIn} 0.5s ease-in-out;
  }

  .todo-checkbox {
    margin-right: 8px;
  }

  .todo-title {
    flex: 1;
    font-size: 18px;
  }

  .todo-edit-btn {
    background-color: var(--primary-400);
    color: white;
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
  }

  .todo-delete-btn {
    background-color: var(--primary-400);
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export default Wrapper;
