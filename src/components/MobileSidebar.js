import Wrapper from "../assets/wrappers/MobileSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { useSidebarContext } from "../hooks/useSidebarContext";
import { BsCalendar2Plus } from "react-icons/bs";
import Button from "../assets/wrappers/Button";

function MobileSidebar({ dispatch, titles }) {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNewList = () => {
    dispatch({ type: "TODO_NEW_LIST" });
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <Button
            className="close-btn"
            onClick={toggle}
            aria-label="Close Overlay"
          >
            <FaTimes />
          </Button>
          <header>
            <Logo />
          </header>
          <Navlinks
            toggleSidebar={toggle}
            dispatch={dispatch}
            titles={titles}
          />
          <Button
            className="list-btn"
            onClick={handleNewList}
            aria-label="Create a New List"
          >
            <BsCalendar2Plus /> New List
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default MobileSidebar;
