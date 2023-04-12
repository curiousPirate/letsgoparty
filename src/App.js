import React, { useState } from 'react';
import ReactFooter from './Components/footer/ReactFooter';
import SearchBar from './Components/searchbar/searchbar'
import Header from './Components/header/header'
import About from './Components/about/About';
import SavedCards from "./Components/savedcards/SavedCards";
import StickySearch from './Components/searchbar/stickysearch';



function App() {
const [setFilter] = useState("");

  return (
    <div className="App">
      <Header />
      <About />
      <StickySearch />
      <div>
        <div className="container mx-auto my-4 flex flex-col">
          <SearchBar setFilter={setFilter} />
        </div>
      </div>
      <SavedCards />
      <ReactFooter />
    </div>
  );
}

export default App;
