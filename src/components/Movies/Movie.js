import React from "react";
import "./Movie.css";

function Movie(props) {
  const { title, year, nominate, isDisabled } = props;
  return (
    <li className={isDisabled === true ? "nominated Movie-item" : "Movie-item"}>
      <div className="col">
        <span>{title} </span>
        <span>({year})</span>
      </div>
      <div className="col col-btn">
        <button onClick={nominate} disabled={isDisabled} className="Movie-Btn">
          Nominate
        </button>
      </div>
    </li>
  );
}

export default Movie;
