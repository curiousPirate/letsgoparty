// import React, { useState } from "react";
// import Card from "../cards/Card";
// import SearchButtons from "../searchbuttons/SearchButtons";
// import PageNumbers from "../pagenumbers/PageNumbers";
// import fetch from "node-fetch";

// const API_BASE_URL = "";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [showComponents, setShowComponents] = useState(false);
//   const [filter, setFilter] = useState("");
//   const [pageNumber, setPageNumber] = useState(1);


//   const search = async (query, filter, pageNumber) => {
//     const url = `${API_BASE_URL}/search?q=${query}&engine=google_events&htichips=${filter}&start=${
//       (pageNumber - 1) * 10
//     }&source=nodejs&output=json&api_key=4d4f1a185a4e0acb10682c3138690aab6dc19eea1df2a242b99f86a4c8bb4a9e`;
//     const headers = {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     };

//     const response = await fetch(url, { headers });

//     const data = await response.json();

//     setResults(data.events_results);
//     setShowComponents(true);
//   };

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       search(query, filter, pageNumber);
//     }
//   };

//   const handleButtonClick = (filter) => {
//     setFilter(filter);
//     setPageNumber(1);
//     search(query, filter, 1);
//   };

//   const handlePageClick = (page) => {
//     setPageNumber(page);
//     search(query, filter, page);
//   };

//   return (
//     <div>
//       <div
//         className="h-fit flex flex-col justify-center"
//         id="search-btn"
//         >
//         <div className="relative p-4 sm:p-12 w-auto sm:w-full sm:mx-auto">
//           <div className="overflow-hidden z-0 rounded-full relative p-3">
//             <form
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 search(query, filter, pageNumber);
//               }}
//               className="relative flex z-50 appearance-none bg-transparent rounded-full"
//             >
//               <input
//                 type="text"
//                 placeholder="Search Events, Clubs, Raves & much more!"
//                 className="rounded-full flex-1 px-6 py-4 text-black focus:outline-none"
//                 aria-label="Search"
//                 id="search-button"
//                 value={query}
//                 onChange={handleInputChange}
//                 onKeyDown={handleKeyDown}
//               />
//               <button
//                 className="text-cyan-950 p-4 bg-white rounded-full hover:text-white hover:bg-blue-400 ml-2"
//                 type="button"
//                 onClick={() => search(query, filter, pageNumber)}
//               >
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   className="w-6 h-6"
//                 >
//                   <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                 </svg>
//               </button>
//             </form>
//             <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
//             <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
//             <div className="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
//             <div className="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
//           </div>
//         </div>
//       </div>
//       {showComponents && (
//         <>
//           <SearchButtons setFilter={handleButtonClick} />
//           <div className="flex flex-wrap justify-center flex-col items-stretch h-full">
//             {Array.isArray(results) &&
//               results.map((result) => <Card key={result.id} {...result} />)}
//           </div>
//           <PageNumbers
//             query={query}
//             setResults={setResults}
//             handlePageClick={handlePageClick}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from "react";
import Card from "../cards/Card";
import SearchButtons from "../searchbuttons/SearchButtons";
import PageNumbers from "../pagenumbers/PageNumbers";
import fetch from "node-fetch";

const API_BASE_URL = "";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showComponents, setShowComponents] = useState(false);
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    handleDefaultSearch();
  }, []);

  const search = async (query, filter, pageNumber) => {
    setLoading(true);
    const url = `${API_BASE_URL}/search?q=${query}&engine=google_events&htichips=${filter}&start=${
      (pageNumber - 1) * 10
    }&source=nodejs&output=json&api_key=4d4f1a185a4e0acb10682c3138690aab6dc19eea1df2a242b99f86a4c8bb4a9e`;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const response = await fetch(url, { headers });

    const data = await response.json();

    setResults(data.events_results);
    setShowComponents(true);
    setLoading(false);
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

  const handleDefaultSearch = async () => {
  const results = await search("Events in India");
  setSearchResults(results);
  };

  return (
    <div>
      <div className="h-fit flex flex-col justify-center" id="search-btn">
        <div className="relative p-4 sm:p-12 w-auto sm:w-full sm:mx-auto">
          <div className="overflow-hidden z-0 rounded-full relative p-3">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                search(query, filter, pageNumber);
              }}
              className="relative flex z-50 appearance-none bg-transparent rounded-full"
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
            </form>
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 flex justify-center items-center">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#93dbe9"
                    strokeWidth="10"
                    r="35"
                    strokeDasharray="164.93361431346415 56.97787143782138"
                    transform="rotate(265.845 50 50)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      calcMode="linear"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                      dur="1s"
                      begin="0s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </circle>
                </svg>
              </div>
            )}
            <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          </div>
        </div>
      </div>
      {showComponents && (
        <>
          <SearchButtons setFilter={handleButtonClick} />
          <div className="flex flex-wrap justify-center flex-col items-stretch h-full">
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