import React, { useState } from "react";

import MoviesList from "../Movies/MoviesList";
import Nominees from "../Nominees/Nominees";

import axios from "axios";
import API from "../../API/config";
import "./SearchMovies.css";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [nominated, setNominated] = useState([]);

  const URL = `http://www.omdbapi.com/?apikey=${API.KEY}&s=${query}`;
  const getData = async () => {
    try {
      const result = await axios.get(URL);
      setFoundMovies(result.data.Search);
      console.log(result);
      setQuery("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const nominate = (newNominant) => {
    if (nominated.length < 5) {
      setNominated((nominated) => [...nominated, newNominant]);
    } else {
      console.log("you cannot add a new nominant");
    }
    // console.log(nominated);
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
      </div>
      <section className="Results">
        <MoviesList list={foundMovies} nominate={nominate} />
        <Nominees nominatedList={nominated} />
      </section>
    </main>
  );
}

export default SearchMovies;
