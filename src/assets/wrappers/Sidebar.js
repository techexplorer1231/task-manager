import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      height: 100vh;
      width: 15rem;
      margin-left: -250px;
      transition: var(--transition);
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .open {
      position: fixed;
      left: 0;
      bottom: 0;
    }
    header {
      height: 4rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .btn-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .btn-link {
      display: flex;
      align-items: center;
      color: var(--grey-900);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      border: 1px solid var(--grey-50);
      background: transparent;
      font-size: 1rem;
    }
    .btn-link:hover {
      background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
      padding-left: 3rem;
      color: var(--grey-900);
      cursor: pointer;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
      background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
    }

    .list-btn {
      width: 15rem;
      background-color: var(--primary-400);
      border: 1px solid var(--grey-50);
      color: var(--white);
      padding: 1rem 0;
      cursor: pointer;
      font-size: 1rem;
    }
  }
`;
export default Wrapper;
