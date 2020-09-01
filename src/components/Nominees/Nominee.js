import React from "react";
import "./Nominee.css";

function Nominee(props) {
  const { title } = props;
  return (
    <li>
      <span>{title}</span> -<span>Year </span>
      <button>Remove</button>
    </li>
  );
}

export default Nominee;
