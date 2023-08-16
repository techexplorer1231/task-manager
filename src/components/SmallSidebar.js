import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { useSidebarContext } from "../hooks/useSidebarContext";

function SmallSidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar;
