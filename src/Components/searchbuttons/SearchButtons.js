import { useState } from "react";

const SearchButtons = ({ setFilter }) => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    setSelectedButton(value);
  };

  return (
    <div className="p-6 flex justify-center">
      <select
        className="bg-sky-950 hover:bg-slate-700 hover:text-white text-sm text-white py-6 px-8 rounded-xl border-none flex justify-start"
        onChange={handleSelectChange}
        value={selectedButton} // Add this line to set the selected value
      >
        <option value="">When do you wanna plan?</option>
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
