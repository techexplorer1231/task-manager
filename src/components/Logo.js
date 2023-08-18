import React, { memo } from "react";
import logo from "../assets/images/todo-logo.webp";

const Logo = () => (
  <img src={logo} height={50} width={120} alt="Todo logo" className="logo" />
);

export default memo(Logo);
