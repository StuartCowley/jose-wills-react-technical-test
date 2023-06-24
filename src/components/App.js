import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <img
        className="app__nasa-logo"
        src={require("../images/nasa-worm-logo.jpg")}
        alt="nasa-logo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults}/>
    </div>
  );
};

export default App;
