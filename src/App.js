import React, { useState } from 'react';
import ReactFooter from './Components/footer/ReactFooter';
import SearchBar from './Components/searchbar/searchbar'
import Header from './Components/header/header'
import About from './Components/about/About';
import SavedCards from "./Components/savedcards/SavedCards";
import Newsletter from './Components/newsletter/newsletter';


function App() {
const [setFilter] = useState("");

  return (
    <div className="App">
      <Header />
      <About />
      <div className="bg-slate-950 bg-gradient-to-b from-slate-950 to-sky-950 bg-no-repeat bg-bottom">
        <SearchBar setFilter={setFilter} />
      </div>
      <div className="bg-sky-950 bg-gradient-to-b from-sky-950 to-white bg-no-repeat bg-bottom">
        <SavedCards />
      </div>
      <div className="bg-white bg-gradient-to-b from-white to-sky-950 bg-no-repeat bg-bottom">
        <Newsletter />
      </div>
      <div className="bg-sky-950 bg-gradient-to-t from-sky-950 to-sky-950 bg-no-repeat bg-bottom">
        <ReactFooter />
      </div>
    </div>
  );
}

export default App;
