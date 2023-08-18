import React from "react";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";

const SidebarContainer = ({ titles, dispatch }) => {
  return (
    <>
      <MobileSidebar dispatch={dispatch} titles={titles} />
      <Sidebar dispatch={dispatch} titles={titles} />
    </>
  );
};

export default SidebarContainer;
