import React from 'react'
import BgImage from "../assets/howItWorkBg.svg"
import NumberOneIcon from "../assets/numberOne.svg"
import NumberTwoIcon from "../assets/numberTwo.svg"
import NumberThreeIcon from "../assets/numberThree.svg"
import NumberFourIcon from "../assets/numberFour.svg"
import oneImageIcon from "../assets/oneImage.svg"
import twoImageIcon from "../assets/twoImage.svg"
import threeImageIcon from "../assets/threeImage.svg"
import fourImageIcon from "../assets/fourImage.svg"
import RightArrowIcon from "../assets/rightArrow.svg"
import FromToArrowIcon from "../assets/fromToArrow.svg"


const Data = [
    {
        numberIcon: NumberOneIcon,
        title: "Install the Extension",
        subTitle: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
        image: oneImageIcon,
    },
    {
        numberIcon: NumberTwoIcon,
        title: "Browse LinkedIn",
        subTitle: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
        image: twoImageIcon,
    },
    {
        numberIcon: NumberThreeIcon,
        title: "Get Enriched Data",
        subTitle: `Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.`,
        image: threeImageIcon,
    },
    {
        numberIcon: NumberFourIcon,
        title: "Sync to CRM Instantly",
        subTitle: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
        image: fourImageIcon
    },
]

const HowItWorks = () => {
    return (
        <div className="relative min-h-[85vh] bg-[#EAEFFA]">
            <img
                src={BgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex items-center py-5">
                <div className='flex items-center justify-center w-full basis-auto max-w-[1300px] mx-auto my-0 py-5 flex-col'>
                    <div className="w-full flex items-center md:items-start gap-3 flex-col mt-5 lg:mt-10">
                        <div className='flex items-center'>
                            <h1 className='font-semibold text-2xl lg:text-4xl text-[#090F4E]'>How it Works</h1>
                        </div>
                        <div>
                            <p>From setup to success in 4 simple steps</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-5 px-4 lg:px-0 relative">
                            {Data?.map((data, index) => (
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