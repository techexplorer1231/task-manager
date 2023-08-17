import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useSidebarContext } from "../hooks/useSidebarContext";

function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Wrapper>
      <header className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <nav>
          <Logo />
          <h4 className="logo-text">Your Task Organizer</h4>
        </nav>
      </header>
    </Wrapper>
  );
}

export default Navbar;
