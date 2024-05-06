import React from "react";
import classes from "./input.module.scss";

const MODULE_PREFIX = "input";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ onChange, placeholder }) => {
  return (
    <input
      type="text"
      className={classes[MODULE_PREFIX]}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
