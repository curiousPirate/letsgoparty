import React, { useState } from "react";
import Card from "../cards/Card";
import SearchButtons from "../searchbuttons/SearchButtons";
import PageNumbers from "../pagenumbers/PageNumbers";
import fetch from "node-fetch";


const SearchBar = ({ initialQuery = "Events in India" }) => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [showComponents, setShowComponents] = useState(false);
  const [filter, setFilter] = useState("date:today");
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

  // useEffect(() => {
  //   search(query, filter, pageNumber);
  //   /* eslint-disable react-hooks/exhaustive-deps */
  // }, [filter, pageNumber]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search(query, "date:today", 1);
    }
  };

  const handleButtonClick = (filter) => {
    setFilter(filter);
    search(query, filter, 1);
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
    search(query, filter, page);
    document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
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
          <div className="relative" id="intro">
            <div className="bg-sky-950 p-6 rounded-md shadow-lg mx-auto m-10">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Discover the Best of the City
              </h2>
              <p className="text-white leading-relaxed">
                When embarking on a journey to a new destination, it's natural
                to feel curious about what the city has in store for you.
              </p>
              <p className="text-white leading-relaxed mt-4">
                With the power of a robust search engine, you can easily access
                a treasure trove of information about all the hottest happenings
                in the city. From thrilling raves to tantalizing food events,
                you can explore an array of exciting activities that will leave
                you spoilt for choice.
              </p>
              <p className="text-white leading-relaxed mt-4">
                You can use the search engine to get concerts, clubs, raves and
                food events near you or simply mention "Events in Amsterdam" if
                you are planning for a vacation & filter out when you are
                planning.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-full p-3 z-60">
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
              className="relative overflow-hidden appearance-none bg-transparent z-40 rounded-full flex items-center justify-between bg-sky-950 bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-2 px-2"
              id="search-button"
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
                className="p-4 rounded-full text-white bg-sky-950 ml-2 hover:bg-sky-900"
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
            <div className="glow glow-1 z-0 animate-glow1 bg-rose-950 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-2 z-2 animate-glow2 bg-pink-50 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-3 z-1 animate-glow3 bg-sky-50 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-4 z-3 animate-glow4 bg-sky-950 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {showComponents && (
        <>
          <SearchButtons setFilter={handleButtonClick} />
          <div>
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