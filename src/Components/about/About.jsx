import React from 'react'

function scrollToSearch() {
  const searchElement = document.getElementById('search-btn');
  if (searchElement) {
    searchElement.scrollIntoView({ behavior: 'smooth' });
  }
}

const About = () => {
    return (
      <div className="relative flex flex-col items-center justify-center max-h-fit sm:h-screen">
        <div className="absolute w-full h-full flex flex-col justify-between" id="home">
          <img src={require("../design/bg-img.jpg")} alt="bg-pic" className="h-screen object-cover sm:object-cover"/>
        </div>
        <div className="z-20 w-full max-w-screen-lg flex flex-col items-center lg:justify-end sm:justify-end">
          <div className="shadow-2xl rounded-lg w-full sm:w-4/5 md:h-96 lg:h-full bg-cover bg-center flex sm:flex-row flex-col m-0 lg:m-100">
            <div className="sm:w-1/2 flex flex-col justify-center items-center">
                <div className="border-l-4 border-gray-400 p-8 text-center">
                  <p className="italic text-cyan-950 sm:text-white sm:text-4xl md:text-2xl lg:text-6xl uppercase font-semibold">
                  <br></br><br></br> 
                  Used by nomads across the world!
                  </p>
                </div>
              <div className="border-t-4 border-gray-400 w-4/5 mx-auto my-4 sm:my-8"></div>
            </div>
            <div className="sm:w-1/2 bg-cyan-950 bg-opacity-50 p-8 rounded-lg flex flex-col justify-end">
              <h3 className="text-white text-md md:text-xl lg:text-xl text-justify">
                Whether you're looking for the hottest events, the trendiest clubs, unforgettable concerts, wild raves, or mouth-watering food events, we've got you covered. Our app is your ultimate guide to the best experiences the world has to offer. We guarantee you'll love life even more after using it! Experience life!
              </h3>
              <button className="opacity-75 bg-gray-100 hover:bg-cyan-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center self-end" type="button" onClick={() => scrollToSearch()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>GET STARTED!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About
