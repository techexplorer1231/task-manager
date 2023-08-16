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
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Your Task Organizer</h4>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
