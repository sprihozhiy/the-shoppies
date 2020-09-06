import React from "react";
import "./Nominee.css";

function Nominee(props) {
  const { title, year, deleteNominate } = props;
  return (
    <li>
      <span>{title}</span> - <span> ( {year} ) </span>
      <button onClick={deleteNominate}>Remove</button>
    </li>
  );
}

export default Nominee;
