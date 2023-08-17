import React from "react";
import TodoItem from "./TodoItem";
import Wrapper from "../assets/wrappers/TodoList";

const TodoList = ({ todos, dispatch }) => {
  return (
    <Wrapper>
      <div className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </Wrapper>
  );
};

export default TodoList;
