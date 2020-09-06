import React, { useState, useEffect } from "react";

import MoviesList from "../Movies/MoviesList";
import Nominees from "../Nominees/Nominees";

import axios from "axios";
import API from "../../API/config";
import "./SearchMovies.css";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [nominated, setNominated] = useState([]);
  // const [isDisabled, setIsDisabled] = useState(false);
  const [searchErr, setSearchErr] = useState("");

  useEffect(() => {
    const newList = foundMovies.map((movie) =>
      nominated.some((isNominated) => isNominated.imdbID === movie.imdbID)
        ? {
            ...movie,
            ...{ disabledStatus: true },
          }
        : { ...movie, ...{ disabledStatus: false } }
    );
    // console.log(newList);
    setFoundMovies(newList);
    // console.log("something has been changed");
  }, [nominated]);

  const getData = async () => {
    setSearchErr("");
    const URL = `http://www.omdbapi.com/?apikey=${API.KEY}&s=${query}`;
    try {
      const response = await axios.get(URL);
      const res = response.data.Search.map((i) => ({
        ...i,
        disabledStatus: false,
      }));
      setFoundMovies(res);
      setSearchTerm(query);
      setQuery("");
    } catch (err) {
      setSearchErr(`Nothing found for: ${query}! Please, try different term.`);
      setQuery("");
      // console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const nominate = (newNominate) => {
    if (nominated.length < 5) {
      setNominated((nominated) => [...nominated, newNominate]);
    } else {
      console.log("you cannot add a new nominant");
    }
    // changeStatus();
  };

  const deleteNominate = (id) => {
    setNominated(nominated.filter((x) => x.imdbID !== id));
  };

  return (
    <main>
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="Search-Bar"
            placeholder="Find Movie..."
            autoComplete="off"
            onChange={handleChange}
            value={query}
          />
          <button type="submit">Search</button>
        </form>
        <h3>{searchErr.length === 0 ? null : searchErr}</h3>
      </div>
      <section className="Results">
        <MoviesList
          list={foundMovies}
          nominate={nominate}
          searchTerm={searchTerm}
        />
        <Nominees nominatedList={nominated} deleteNominate={deleteNominate} />
      </section>
    </main>
  );
}

export default SearchMovies;
