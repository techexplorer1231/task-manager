import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useSidebarContext } from "../hooks/useSidebarContext";
import { BsCalendar2Plus } from "react-icons/bs";

function BigSidebar({ todos, dispatch }) {
  const { isSidebarOpen } = useSidebarContext();

  const handleNewList = () => {
    dispatch({ type: "TODO_NEW_LIST" });
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks
            dispatch={dispatch}
            todos={todos}
            toggleSidebar={console.log}
          />
        </div>
        <button type="button" className="list-btn" onClick={handleNewList}>
          <BsCalendar2Plus /> New List
        </button>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
