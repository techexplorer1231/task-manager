import React, { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import TodoTitle from "../components/TodoTitle";
import TodoList from "../components/TodoList";
import Wrapper from "../assets/wrappers/TodoContainer";

const TodoContainer = ({ todosCollection, dispatch }) => {
  const [todos, setTodos] = useState([]);
  const [singleList, setSingleList] = useState({});

  useEffect(() => {
    const singleList = todosCollection.find((todo) => todo.isActive === true);
    setSingleList({ ...singleList });
    setTodos(singleList.todos);
  }, [todosCollection]);

  return (
    <Wrapper>
      <TodoTitle className="todo-list" list={singleList} dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
      <AddTodo dispatch={dispatch} />
    </Wrapper>
  );
};

export default TodoContainer;
