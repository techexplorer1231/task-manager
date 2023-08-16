import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { useSidebarContext } from "../hooks/useSidebarContext";
import { BsCalendar2Plus } from "react-icons/bs";

function SmallSidebar({ dispatch, todos }) {
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
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks toggleSidebar={toggle} dispatch={dispatch} todos={todos} />
          <button className="list-btn" onClick={handleNewList}>
            <BsCalendar2Plus /> New List
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar;
