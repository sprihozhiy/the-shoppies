import React from "react";
import "./Nominee.css";

function Nominee(props) {
  const { title, deleteNominate } = props;
  return (
    <li>
      <span>{title}</span> - <span>Year </span>
      <button onClick={deleteNominate}>Remove</button>
    </li>
  );
}

export default Nominee;
