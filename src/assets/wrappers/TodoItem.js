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
    display: grid;
    grid-template-columns: 1fr 12fr 3fr;
    align-items: center;
    margin: 8px 0;
    animation: ${fadeIn} 0.5s ease-in-out;
    margin-bottom: 1rem;
    /* background-color: var(--white); */
    background-color: #faaca8;
    background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
    padding: 1rem;
    border-radius: 1rem;

    input[type="text"] {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--primary-200);
      border-radius: 5px;
      height: 2.2rem;
      appearance: none;
    }

    input[type="checkbox"] {
      height: 1.2rem;
      width: 1.2rem;
    }
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
    height: 2rem;
    width: 2rem;
    border-radius: 0.25rem;
  }

  .todo-delete-btn {
    background-color: var(--primary-400);
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border-radius: 0.25rem;
  }

  @media (min-width: 992px) {
    .todo-item {
      display: grid;
      grid-template-columns: 1fr 12fr 1fr;
    }
  }
`;

export default Wrapper;
