import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 15rem;
      margin-left: -250px;
      transition: var(--transition);
      position: relative;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
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
    }
    .btn-link:hover {
      background: var(--primary-400);
      padding-left: 3rem;
      color: var(--white);
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
      color: var(--white);
      background: var(--primary-400);
    }

    .list-btn {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 15rem;
      background: var(--primary-400);
      border: 1px solid var(--grey-50);
      color: var(--white);
      padding: 1rem 0;
      cursor: pointer;
    }
  }
`;
export default Wrapper;
