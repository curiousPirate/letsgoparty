// import { useState } from 'react';

// const SearchButtons = ({ setFilter }) => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const handleButtonClick = (value) => {
//     setFilter(value);
//     setSelectedButton(value);
//   };


//   return (
    
//     <div className="m-6 space-x-4">
//   <button
//     className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white  text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:today' ? 'selected bg-slate-500' : ''}`}
//     type="button"
//     onClick={() => handleButtonClick('date:today')}
//   >
//     Today's Events
//   </button>
//   <button
//     className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:tomorrow' ? 'selected bg-slate-500' : ''}`}
//     type="button"
//     onClick={() => handleButtonClick('date:tomorrow')}
//   >
//     Tomorrow's Events
//   </button>
//   <button
//     className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:week' ? 'selected bg-slate-500' : ''}`}
//     type="button"
//     onClick={() => handleButtonClick('date:week')}
//   >
//     This Week's Events
//       </button>
//       <button
//     className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:next_week' ? 'selected bg-slate-500' : ''}`}
//         type="button"
//         onClick={() => handleButtonClick('date:next_week')}
//       >
//         Next Week's Events
//       </button>
//       <button
//     className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:month' ? 'selected bg-slate-500' : ''}`}
//         type="button"
//         onClick={() => handleButtonClick('date:month')}
//       >
//         This Month's Events
//       </button>
//       <button
//     className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'date:next_month' ? 'selected bg-slate-500' : ''}`}
//         type="button"
//         onClick={() => handleButtonClick('date:next_month')}
//       >
//         Next Month's Events
//       </button>
//       <button
//     className={`flex-shrink-0 bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none ${selectedButton === 'event_type:Virtual-Event' ? 'selected bg-slate-500' : ''}`}
//         type="button"
//         onClick={() => handleButtonClick('event_type:Virtual-Event')}
//       >
//         Online Events
//       </button>
//     </div>
//   );
// };

// export default SearchButtons;

import { useState } from "react";

const SearchButtons = ({ setFilter }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setSelectedButton(value);
  };

  return (
    <div className="m-6">
      <select
        className="bg-cyan-950 hover:bg-slate-700 hover:text-white text-sm text-white py-1 px-2 rounded-xl border-none"
        onChange={handleSelectChange}
      >
        <option
          value="date:today"
          className={`${
            selectedButton === "date:today" ? "selected bg-slate-500" : ""
          }`}
        >
          Today's Events
        </option>
        <option
          value="date:tomorrow"
          className={`${
            selectedButton === "date:tomorrow" ? "selected bg-slate-500" : ""
          }`}
        >
          Tomorrow's Events
        </option>
        <option
          value="date:week"
          className={`${
            selectedButton === "date:week" ? "selected bg-slate-500" : ""
          }`}
        >
          This Week's Events
        </option>
        <option
          value="date:next_week"
          className={`${
            selectedButton === "date:next_week" ? "selected bg-slate-500" : ""
          }`}
        >
          Next Week's Events
        </option>
        <option
          value="date:month"
          className={`${
            selectedButton === "date:month" ? "selected bg-slate-500" : ""
          }`}
        >
          This Month's Events
        </option>
        <option
          value="date:next_month"
          className={`${
            selectedButton === "date:next_month" ? "selected bg-slate-500" : ""
          }`}
        >
          Next Month's Events
        </option>
        <option
          value="event_type:Virtual-Event"
          className={`${
            selectedButton === "event_type:Virtual-Event"
              ? "selected bg-slate-500"
              : ""
          }`}
        >
          Online Events
        </option>
      </select>
    </div>
  );
};

export default SearchButtons;
