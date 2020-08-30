import React, { useState } from "react";

import MoviesList from "../Movies/MoviesList";
import Nominees from "../Nominees/Nominees";

import axios from "axios";
import API from "../../API/config";
import "./SearchMovies.css";

function SearchMovies() {
  const [query, setQuery] = useState("");

  const URL = `http://www.omdbapi.com/?apikey=${API.KEY}&t=Iron+Man`;
  const getData = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(URL);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Search">
      <form>
        <input type="text" className="Search-Bar" placeholder="Find Movie..." />
        <button type="submit" onClick={getData}>
          Search
        </button>
      </form>
      <section className="Results">
        <MoviesList />
        <Nominees />
      </section>
    </div>
  );
}

export default SearchMovies;
