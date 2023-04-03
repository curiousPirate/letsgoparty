import React, { useState } from "react";
import Card from "../cards/Card";
import SearchButtons from "../searchbuttons/SearchButtons";
import PageNumbers from "../pagenumbers/PageNumbers";
import fetch from "node-fetch";

const API_BASE_URL = "https://letsgoparty-backend.netlify.app/";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showComponents, setShowComponents] = useState(false);
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);


  const search = async (query, filter, pageNumber) => {
    const url = `${API_BASE_URL}/search?q=${query}&engine=google_events&htichips=${filter}&start=${
      (pageNumber - 1) * 10
    }&source=nodejs&output=json&api_key=348e8db09351ac50bd0d138aa02fa794c792d94070d5fc3a628ea00c94025b64`;
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 348e8db09351ac50bd0d138aa02fa794c792d94070d5fc3a628ea00c94025b64",
    };
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.events_results);
    setShowComponents(true);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search(query, filter, pageNumber);
    }
  };

  const handleButtonClick = (filter) => {
    setFilter(filter);
    setPageNumber(1);
    search(query, filter, 1);
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
    search(query, filter, page);
  };

  return (
    <div>
      <div className="flex items-center border-b border-b-2 border-cyan-950 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search Events, Clubs, Raves & much more!"
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="flex-shrink-0 bg-cyan-950 hover:bg-cyan-800 border-cyan-950 hover:border-cyan-800 text-sm border-4 text-white py-1 px-2 rounded-xl focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => search(query, filter, pageNumber)}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
      {showComponents && (
        <>
          <SearchButtons setFilter={handleButtonClick} />
          <div className="flex flex-wrap justify-center">
            {Array.isArray(results) &&
              results.map((result) => <Card key={result.id} {...result} />)}
          </div>
          <PageNumbers
            query={query}
            setResults={setResults}
            handlePageClick={handlePageClick}
          />
        </>
      )}
    </div>
  );
};

export default SearchBar;
