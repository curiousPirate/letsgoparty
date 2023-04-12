import React, { useState, useEffect } from "react";
import Card from "../cards/Card";
import SearchButtons from "../searchbuttons/SearchButtons";
import PageNumbers from "../pagenumbers/PageNumbers";
import fetch from "node-fetch";


const SearchBar = () => {
  const [query, setQuery] = useState("California");
  const [results, setResults] = useState([]);
  const [showComponents, setShowComponents] = useState(false);
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  // const [isSticky, setIsSticky] = useState(false);

  const API_BASE_URL = "";

  const search = async (query, filter, pageNumber) => {
    const url = `${API_BASE_URL}/search?q=${query}&engine=google_events&htichips=${filter}&start=${
      (pageNumber - 1) * 10
    }&source=nodejs&output=json&api_key=b40cf362d7bd15ae459eac770677ffc8e1e890ac7291ecb0dc55b3b6cee66b70`;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const response = await fetch(url, { headers });

    const data = await response.json();

    setResults(data.events_results);
    setShowComponents(true);
  };

  useEffect(() => {
    search(query, filter, pageNumber);
  
  }, [filter, pageNumber]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search(query, filter, 1);
    }
  };

  const handleButtonClick = () => {
    setFilter("");
    search(query, "", 1);
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
    search(query, filter, page);
    document
      .getElementById("search-button")
      .scrollIntoView({ behavior: "smooth" });
  };

    // useEffect(() => {
    //   function handleScroll() {
    //     if (window.pageYOffset > 150) {
    //       setIsSticky(true);
    //     } else {
    //       setIsSticky(false);
    //     }
    //   }

    //   window.addEventListener("scroll", handleScroll);

    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);

    // const searchClassName = isSticky ? "fixed top-10 w-auto sm:w-full" : "";

  return (
    <div>
      <div className="h-fit flex flex-col justify-center" id="search-btn">
        <div className="relative p-4 sm:p-12 w-auto sm:w-full sm:mx-auto ">
          <div className="overflow-hidden rounded-full p-3 z-50 sticky top-0">
            {/* <div
              className={`${searchClassName}`}
              id="stickySearch"
              style={{ zIndex: 50 }}
            > */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                search(query, filter, pageNumber);
              }}
              className="relative appearance-none bg-transparent rounded-full z-50 flex items-center justify-between bg-cyan-950 bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-2 px-2"
            >
              <input
                type="text"
                placeholder="Search Events, Clubs, Raves & much more!"
                className="rounded-full flex-1 px-6 py-4 text-black focus:outline-none"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button
                className="text-cyan-950 p-4 bg-white rounded-full hover:text-white hover:bg-blue-400 ml-2"
                type="button"
                onClick={() => search(query, "", "1")}
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
            </form>
            {/* <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
              <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
              <div className="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
              <div className="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
      {showComponents && (
        <>
          <SearchButtons setFilter={handleButtonClick} />

            {Array.isArray(results) &&
              results.map((result) => <Card key={result.id} {...result} />)}


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