import React, { useState, useEffect } from "react";

function StickySearch() {
  const [isSticky, setIsSticky] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState("1");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search(query, filter, pageNumber);
    }
  };

  const search = (query, filter, pageNumber) => {
    // your search functionality here
  };

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchClassName = isSticky ? "sticky top-0" : "";

  return (
    <div className="relative z-0">
      <div
        className={`overflow-hidden rounded-full p-3 w-10/12 ${searchClassName}`}
        id="stickySearch"
        style={{ zIndex: 50 }}
      >
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
            id="search-button"
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
      </div>
    </div>
  );
}

export default StickySearch;
