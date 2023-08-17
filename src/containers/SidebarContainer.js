import React from "react";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";

const SidebarContainer = ({ titles, dispatch }) => {
  return (
    <>
      <SmallSidebar dispatch={dispatch} titles={titles} />
      <BigSidebar dispatch={dispatch} titles={titles} />
    </>
  );
};

export default SidebarContainer;
