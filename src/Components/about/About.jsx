import React from 'react'

function scrollToSearch() {
  const searchElement = document.getElementById('search-btn');
  if (searchElement) {
    searchElement.scrollIntoView({ behavior: 'smooth' });
  }
}

const About = () => {
    return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0 bg-cover bg-center">
        <img src={require("../design/bg-img.jpg")} alt="bg-pic"/>
      </div>
      <div className="inset-0 z-10 bg-gray-900 bg-opacity-75"></div>
      <div className="z-20 w-full max-w-screen-lg flex flex-col items-center justify-center">
        <div className="shadow-2xl rounded-lg w-full sm:w-4/5 md:h-96 lg:h-full bg-cover bg-center flex sm:flex-row flex-col ">
          <div className="sm:w-1/2 w-fit flex flex-col justify-center items-center">
            <div className="border-l-4 border-gray-400 p-8 text-center">
              <p className="italic text-white text-lg md:text-4xl lg:text-6xl uppercase font-semibold">
                Used by nomads across the world!
              </p>
            </div>
            <div className="border-t-4 border-gray-400 w-4/5"></div>
            <div className="text-gray-400 font-semibold text-lg mt-4"></div>
          </div>
          <div className="sm:w-1/2 w-fit bg-cyan-950 bg-opacity-50 p-8 rounded-tr-lg rounded-br-lg flex flex-col justify-end">
            <p className="text-white text-lg md:text-xl lg:text-2xl mb-4">
              An all-powerful app that can be used to look for the happening events, trending clubs, bucket list worth concerts, wild raves, mouth-watering food events and everything in between. We guarantee you'll love life after using it!
            </p>
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
