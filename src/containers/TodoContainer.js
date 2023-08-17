import React, { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import TodoTitle from "../components/TodoTitle";
import TodoList from "../components/TodoList";

const TodoContainer = ({ todosCollection, dispatch }) => {
  const [todos, setTodos] = useState([]);
  const [singleList, setSingleList] = useState({});

  useEffect(() => {
    console.log("todosCollection", todosCollection);
    const singleList = todosCollection.find((todo) => todo.isActive === true);
    setTodos(singleList.todos);
    setSingleList(singleList);
  }, [todosCollection]);

  return (
    <>
      <TodoTitle className="todo-list" list={singleList} dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
      <AddTodo dispatch={dispatch} />
    </>
  );
};

export default TodoContainer;
