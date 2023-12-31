import styled from "styled-components";

const Button = styled.button`
  background-color: var(--primary-400);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  margin: 0.1rem;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
