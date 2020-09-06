import React from "react";
import "./Movie.css";

function Movie(props) {
  const { title, year, nominate, isDisabled } = props;
  return (
    <li className={isDisabled === true ? "red" : "black"}>
      <span>{title} - </span>
      <span>({year}) </span>
      <button onClick={nominate} disabled={isDisabled}>
        Nominate
      </button>
    </li>
  );
}

export default Movie;
