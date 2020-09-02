import React from "react";
import "./Nominee.css";

function Nominee(props) {
  const { title, deleteNominate, id } = props;
  return (
    <li>
      <span>{title}</span> - <span>Year </span>
      <button onClick={deleteNominate}>Remove</button>
      <button onClick={() => console.log(id)}>Press</button>
    </li>
  );
}

export default Nominee;
