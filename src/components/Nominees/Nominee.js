import React from "react";
import "./Nominee.css";

function Nominee(props) {
  const { title, year, deleteNominate } = props;
  return (
    <li className="Nominee-item">
      <div className="col">
        <span>{title} </span>
        <span>({year})</span>
      </div>
      <div className="col col-btn">
        <button onClick={deleteNominate} className="Nominee-Btn">
          Remove
        </button>
      </div>
    </li>
  );
}

export default Nominee;
