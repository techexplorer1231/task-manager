import React from "react";
import Wrapper from "../assets/wrappers/Sidebar";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useSidebarContext } from "../hooks/useSidebarContext";
import { BsCalendar2Plus } from "react-icons/bs";
import { TODO_NEW_LIST } from "../constants/actionTypes";
import Button from "../assets/wrappers/Button";

function Sidebar({ titles, dispatch }) {
  const { isSidebarOpen } = useSidebarContext();

  const handleNewList = () => {
    dispatch({ type: TODO_NEW_LIST });
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
          <Navlinks dispatch={dispatch} titles={titles} />
        </div>
        <Button
          type="button"
          className={isSidebarOpen ? "list-btn" : "list-btn open"}
          onClick={handleNewList}
        >
          <BsCalendar2Plus /> New List
        </Button>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
