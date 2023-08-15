import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

function SmallSidebar() {
  const isSidebarOpen = true;

  const toggle = () => {
    console.log("small toggle");
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
