import React from 'react'

const Hero = () => {
    return (
        <div
        name="home"
        style={{
            backgroundImage: `url("https://source.unsplash.com/1600x900/?party")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: "100vh",
        }}
        className="w-full h-screen flex flex-col justify-between"
        id="home"
        >
        <div className="intro grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center w-full px-2 py-8">
            <h1 className='text-5xl px-6'>
                LET'S GET THE PARTY STARTED!
            </h1>
            </div>
        </div>
        <style>{`
            @media only screen and (max-width: 768px) {
            #home {
            background-image: url("https://source.unsplash.com/640x960/?party") !important;
            background-size: auto !important;
            }
            .text-cyan-950 {
                font-size: 3rem;
            }
            .text-4xl {
                font-size: 2.5rem;
            }
            .text-2xl {
                font-size: 1.5rem;
            }
            }
        `}</style>
        </div>
    );
    };

export default Hero

