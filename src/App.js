import React from "react";
import Search from "./components/Search/Search";
import MoviesList from "./components/Movies/MoviesList";
import Nominees from "./components/Nominees/Nominees";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-Header">
          <h1>The Shoppies</h1>
        </header>
        <main>
          <Search />
          <section className="Results">
            <MoviesList />
            <Nominees />
          </section>
        </main>
      </div>

      <footer>
        <p>
          Made by:
          <span>
            <a
              href="http://serhii.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Serhii Prykhozhiy
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
