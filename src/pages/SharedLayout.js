import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Wrapper from "../assets/wrappers/SharedLayout";

function SharedLayout() {
  return (
    <Wrapper>
      <main className="todo">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="todo-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;
