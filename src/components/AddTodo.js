import React, { useCallback } from "react";
import Wrapper from "../assets/wrappers/AddTodo";
import { TODO_ADD } from "../constants/actionTypes";
import TextInputForm from "./TextInputForm";

const AddTodo = ({ dispatch }) => {
  const handleAddTodo = useCallback(
    (inputValue) => {
      dispatch({
        type: TODO_ADD,
        payload: {
          id: Date.now(),
          title: inputValue,
          completed: false,
          isEditing: false,
        },
      });
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <TextInputForm
        onSubmit={handleAddTodo}
        formClassName="add-section"
        inputPlaceholder="Add a Task"
        initialValue=""
      />
    </Wrapper>
  );
};

export default AddTodo;
