import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../assets/wrappers/Layout";
import todoReducer, { initialTodosCollection } from "../reducers/todoReducer";
import TodoContainer from "../containers/TodoContainer";
import SidebarContainer from "../containers/SidebarContainer";

function Layout() {
  const [titles, setTitles] = useState([]);
  const [todosCollection, dispatch] = useReducer(
    todoReducer,
    initialTodosCollection
  );

  useEffect(() => {
    const todosTitle = todosCollection.map((todo) => ({
      collectionTitle: todo.collectionTitle,
      collectionId: todo.collectionId,
      isActive: todo.isActive,
    }));
    setTitles(todosTitle);
  }, [todosCollection]);

  return (
    <Wrapper>
      <main className="todo">
        <SidebarContainer titles={titles} dispatch={dispatch} />
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
