import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { useSidebarContext } from "../hooks/useSidebarContext";
import { BsCalendar2Plus } from "react-icons/bs";

function SmallSidebar({ dispatch }) {
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
          <Navlinks toggleSidebar={toggle} dispatch={dispatch} />
          <button className="list-btn">
            <BsCalendar2Plus /> New List
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar;
