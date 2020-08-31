import React from "react";
import "./Movie.css";

function Movie(props) {
  return (
    <li>
      <span>{props.title} - </span>
      <span>({props.year}) </span>
      <button>Nominate</button>
    </li>
  );
}

export default Movie;
