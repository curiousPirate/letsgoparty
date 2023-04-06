import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full m-auto'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='lg:text-center text-left'>
                    <h2 className='text-5xl font-bold text-white pt-16 px-6'>
                        Used by nomads across the world!
                    </h2>
                    <p className='text-3xl pb-16 px-6 pt-6 text-gray-400'>
                        An all powerful app that can be used to look for the happening events, trending clubs, bucket list worth concerts, wild raves, mouth watering food events and everything in between. We guarantee you'll love life after using it!
                    </p>
                </div>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className=' shadow-black overflow-hidden'>
                        <img src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Party' className="p-2"/>
                    </div>
                    <div className=' shadow-black overflow-hidden'>
                        <img src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Restaurant' className="p-2"/>
                    </div>
                    <div className=' shadow-black overflow-hidden'>
                        <img src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Concert' className="p-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
