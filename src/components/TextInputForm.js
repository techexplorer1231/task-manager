import React, { useState } from "react";
import useFocusInput from "../hooks/useFocusInput";

const TextInputForm = ({
  onSubmit,
  formClassName,
  inputPlaceholder,
  initialValue,
  inputClassName,
  onTextChange,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const inputRef = useFocusInput();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onTextChange && onTextChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={inputPlaceholder}
        ref={inputRef}
        className={inputClassName}
      />
    </form>
  );
};

export default TextInputForm;
