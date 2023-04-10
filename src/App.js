import React, { useState } from 'react';
import ReactFooter from './Components/footer/ReactFooter';
import SearchBar from './Components/searchbar/searchbar'
import Header from './Components/header/header'
import Hero from './Components/hero/Hero';
import About from './Components/about/About';
import SavedCards from "./Components/savedcards/SavedCards";


function App() {
const [setFilter] = useState("");

  return (
    <div className="App">
      <Header />
      <About />

      <div>
        <div className="container mx-auto my-4 flex flex-col">
          <SearchBar setFilter={setFilter} />
        </div>
      </div>
      <SavedCards />
      <Hero />
      <ReactFooter />
    </div>
  );
}

export default App;
