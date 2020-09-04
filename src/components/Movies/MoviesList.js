import React from "react";
import Movie from "./Movie";
import { v4 as uuidv4 } from "uuid";

import "./MoviesList.css";

function MoviesList(props) {
  const { list, nominate, searchTerm } = props;
  return (
    <div className="Movies-List">
      <h3>Search Results: {searchTerm.length > 1 ? searchTerm : null}</h3>
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
                key={uuidv4()}
                nominate={() => nominate(movie)}
                disabledStatus={movie.disabled}
                // checkNomination={() => checkNomination(movie.imdbID)}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesList;
