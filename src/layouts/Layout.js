import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Wrapper from "../assets/wrappers/Layout";
import todoReducer, { initialTodosCollection } from "../reducers/todoReducer";
import TodoContainer from "../containers/TodoContainer";

function Layout() {
  const [todosCollection, dispatch] = useReducer(
    todoReducer,
    initialTodosCollection
  );

  return (
    <Wrapper>
      <main className="todo">
        <SmallSidebar dispatch={dispatch} todos={todosCollection} />
        <BigSidebar dispatch={dispatch} todos={todosCollection} />
        <div>
          <Navbar />
          <TodoContainer
            todosCollection={todosCollection}
            dispatch={dispatch}
          />
        </div>
      </main>
    </Wrapper>
  );
}

export default Layout;
