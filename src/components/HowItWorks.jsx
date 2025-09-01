import React from 'react'
import BgImage from "../assets/howItWorkBg.svg"

const HowItWorks = () => {
    return (
        <div className="relative min-h-[85vh] bg-[#EAEFFA]">
            <img
                src={BgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10  mx-auto ">
                <div className='flex items-center my-5'>
                    <div className="w-full">
                        <div>
                            <h1>How it Works</h1>
                        </div>
                        <div>
                            <p>From setup to success in 4 simple steps</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default HowItWorks