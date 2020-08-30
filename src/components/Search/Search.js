import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" className="Search-Bar" placeholder="Find Movie..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
