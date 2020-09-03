import React from "react";
import "./Movie.css";

function Movie(props) {
  const { title, year, nominate } = props;
  return (
    <li>
      <span>{title} - </span>
      <span>({year}) </span>
      <button onClick={nominate}>Nominate</button>
      {/* <button onClick={checkNomination}>nominated?</button> */}
    </li>
  );
}

export default Movie;
