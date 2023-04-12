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
        <div className="bg-white">
          <SearchBar setFilter={setFilter} />
        </div>
      <SavedCards />
      <Newsletter />
      <ReactFooter />
    </div>
  );
}

export default App;
