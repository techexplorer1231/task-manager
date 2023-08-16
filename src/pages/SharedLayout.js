import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Wrapper from "../assets/wrappers/SharedLayout";
import AddTodo from "../components/AddTodo";

function SharedLayout() {
  return (
    <Wrapper>
      <main className="todo">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="todo-list">
            <Outlet />
          </div>
          <div className="todo-add">
            <AddTodo />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;
