import React, { useState } from "react";

function PageNumbers(props) {
  const { handlePageClick, pageNumber } = props;

  const [currentPage, setCurrentPage] = useState(pageNumber);

  const handlePageChange = (event) => {
    const start = parseInt(event.target.value);
    handlePageClick(start);
    setCurrentPage(start);
  };

  return (
    <div className="p-6 flex justify-center">
      <select
        value={currentPage}
        onChange={handlePageChange}
        className="bg-sky-950 hover:bg-slate-950 text-white font-bold py-6 px-8 rounded-lg border-slate-700"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((start) => (
          <option key={start} value={start}>
            Page {start}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PageNumbers;
