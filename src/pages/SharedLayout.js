import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Wrapper from "../assets/wrappers/SharedLayout";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import todoReducer, { initialTodosCollection } from "../reducers/todoReducer";

function SharedLayout() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodosCollection);

  return (
    <Wrapper>
      <main className="todo">
        <SmallSidebar dispatch={dispatch} todos={todos} />
        <BigSidebar dispatch={dispatch} todos={todos} />
        <div>
          <Navbar />
          <div className="todo-list">
            {todos
              .filter((todo) => todo.isActive === true)
              .map((todo) => {
                return (
                  <>
                    {JSON.stringify(todo)}
                    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                  </>
                );
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
