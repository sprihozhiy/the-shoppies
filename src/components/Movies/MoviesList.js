import React from "react";
import Movie from "./Movie";

import "./MoviesList.css";

function MoviesList(props) {
  const list = props.list;
  return (
    <div className="Movies-List">
      <h3>Search Results:</h3>
      {list.length === 0 ? (
        <p>No results</p>
      ) : (
        <ul>
          {list !== [] &&
            list.map((movie) => (
              <Movie
                title={movie.Title}
                id={movie.imdbID}
                year={movie.Year}
                key={movie.imdbID}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesList;
