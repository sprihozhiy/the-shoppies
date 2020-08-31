import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SearchMovies from "./components/SearchMovies/SearchMovies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <SearchMovies />
      </div>
      <Footer />
    </div>
  );
}

export default App;
