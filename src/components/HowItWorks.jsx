import React from 'react'
import BgImage from "../assets/howItWorkBg.svg"
import RightArrowIcon from "../assets/rightArrow.svg"
import FromToArrowIcon from "../assets/fromToArrow.svg"
import { HowItWorksData } from '../utils/data'

const HowItWorks = () => {
    return (
        <div className="relative min-h-[85vh] bg-[#EAEFFA] px-0 md:px-4" id="howItWorks">
            <img
                src={BgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex items-center py-5">
                <div className='flex items-center justify-center w-full basis-auto max-w-[1300px] mx-auto my-0 py-5 flex-col'>
                    <div className="w-full flex items-center md:items-start gap-3 flex-col mt-5 lg:mt-10">
                        {/* header  */}
                        <div className='flex items-center'>
                            <h1 className='font-semibold text-2xl lg:text-4xl text-[#090F4E]'>How it Works</h1>
                        </div>

                        {/* sub header  */}
                        <div>
                            <p>From setup to success in 4 simple steps</p>
                        </div>

                        {/* Cards  */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-5 px-4 lg:px-0 relative">
                            {HowItWorksData?.map((data, index) => (
                                <div
                                    key={index + data?.title}
                                    className="bg-white rounded-xl shadow-lg relative flex items-center flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[1px] hover:border-[#009AD5]"
                                >
                                    {/* Top Icon */}
                                    <div className="flex items-center justify-center w-20 h-20 mb-4">
                                        <img
                                            src={data?.numberIcon}
                                            alt={index + 1}
                                            className="w-16 h-16 object-contain"
                                        />
                                    </div>

                                    {index !== 3 &&
                                        <img src={FromToArrowIcon} alt="Arrow" className='hidden lg:flex absolute top-[6rem] -right-[6rem] -z-20 hover:-z-20 group-hover:-z-20 group-hover:invisible hover:invisible' />
                                    }


                                    {/* Title & Subtitle */}
                                    <div className="text-center mb-4">
                                        <h1 className="text-lg font-semibold">{data?.title}</h1>
                                        <p className="text-sm text-gray-600 mt-2">{data?.subTitle}</p>
                                    </div>

                                    {/* Bottom Image pinned to end */}
                                    <div className="w-full flex items-center justify-center mt-auto lg:invisible ">
                                        <img
                                            src={data?.image}
                                            alt={data?.title}
                                            className="max-h-60 max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="w-full hidden lg:flex items-center justify-center mt-auto lg:absolute lg:bottom-0 lg:left-0 p-[1px]">
                                        <img
                                            src={data?.image}
                                            alt={data?.title}
                                            className="max-h-60 max-w-full object-contain rounded-br-lg"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* bottom button  */}
                    <div className='flex items-center justify-center my-5 '>
                        <button type="button" className='bg-[#B3FC6A] text-lg font-semibold p-3 flex items-center justify-center gap-3 text-nowrap rounded-xl w-[296px] h-[60px] hover:shadow-lg'>
                            Try LeadCRM Now
                            <img src={RightArrowIcon} alt="Go" style={{ width: "20px", height: "14px" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HowItWorks