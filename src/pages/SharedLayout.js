import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Wrapper from "../assets/wrappers/SharedLayout";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import todoReducer, { initialTodosCollection } from "../reducers/todoReducer";
import TodoTitle from "../components/TodoTitle";

function SharedLayout() {
  const [todosCollection, dispatch] = useReducer(
    todoReducer,
    initialTodosCollection
  );

  const [todos, setTodos] = useState([]);
  const [singleList, setSingleList] = useState({});

  useEffect(() => {
    console.log("todosCollection", todosCollection);
    const singleList = todosCollection.find((todo) => todo.isActive === true);
    setTodos(singleList.todos);
    setSingleList(singleList);
  }, [todosCollection]);

  return (
    <Wrapper>
      <main className="todo">
        <SmallSidebar dispatch={dispatch} todos={todosCollection} />
        <BigSidebar dispatch={dispatch} todos={todosCollection} />
        <div>
          <Navbar />
          <TodoTitle list={singleList} dispatch={dispatch} />
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
