import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Wrapper from "../assets/wrappers/SharedLayout";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import todoReducer, { initialTodos } from "../reducers/todoReducer";

function SharedLayout() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <Wrapper>
      <main className="todo">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="todo-list">
            {todos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
          </div>
          <div className="todo-add">
            <AddTodo dispatch={dispatch} />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;
