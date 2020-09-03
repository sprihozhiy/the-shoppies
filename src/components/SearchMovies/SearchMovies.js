import React, { useState } from "react";

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
  // const [disabledNomination, setDisabledNomination] = useState(false);
  // const [isNominated, setIsNominated] = useState(false);

  const URL = `http://www.omdbapi.com/?apikey=${API.KEY}&s=${query}`;
  const getData = async () => {
    try {
      const result = await axios.get(URL);
      setFoundMovies(result.data.Search);
      setSearchTerm(query);
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

  const nominate = (newNominate) => {
    if (nominated.length < 5) {
      setNominated((nominated) => [...nominated, newNominate]);
      console.log(nominated);
    } else {
      console.log("you cannot add a new nominant");
    }
  };

  const deleteNominate = (id) => {
    setNominated(nominated.filter((x) => x.imdbID !== id));
  };

  // const checkNomination = (id) => {
  //   const isNominee = nominated.find((x) => x.imdbID === id);
  //   console.log(isNominee);
  // };

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
        <MoviesList
          list={foundMovies}
          nominate={nominate}
          searchTerm={searchTerm}
          // checkNomination={checkNomination}
        />
        <Nominees nominatedList={nominated} deleteNominate={deleteNominate} />
      </section>
    </main>
  );
}

export default SearchMovies;
