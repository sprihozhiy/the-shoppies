import React from "react";
import Movie from "./Movie";

import "./MoviesList.css";

function MoviesList() {
  return (
    <div className="Movies-List">
      <h3>Movies List</h3>
      <ul>
        <Movie />
      </ul>
    </div>
  );
}

export default MoviesList;
