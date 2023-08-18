import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .btn-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .btn-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    width: 70vw;
    border: 1px solid var(--grey-50);
    background: transparent;
    font-size: 1rem;
  }
  .btn-link:hover {
    background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
    color: var(--grey-900);
    cursor: pointer;
  }
  .btn-link:hover .icon {
    color: var(--primary-500);
  }
  .active {
    color: var(--grey-900);
    background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  }

  .list-btn {
    position: fixed;
    bottom: 2rem;
    width: 70vw;
    background: var(--primary-500);
    border: 1px solid var(--grey-50);
    color: var(--white);
    padding: 1rem 0;
    cursor: pointer;
    font-size: 1rem;
  }
`;
export default Wrapper;
