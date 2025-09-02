import React from 'react'
import ArrowIcon from "../assets/arrow.svg";
import BallIcon from "../assets/ball.svg"
import SingleStarIcon from "../assets/singleStar.svg"
import { ReviewData } from '../utils/data';

const Review = () => {
    return (
        <section className="relative z-10 flex items-center py-2 md:py-5 mb-0 md:mb-[6rem] md:px-4" id='review'>

            {/* Top Right Ball  */}
            <img src={BallIcon} alt="Ball" className='absolute hidden lg:block lg:-top-[35px] lg:right-1' />

            <div className='flex items-center justify-center w-full basis-auto max-w-[1300px] mx-auto my-0 py-5 flex-col'>
                <div className="w-full flex items-center md:items-start gap-3 flex-col mt-5 lg:mt-10">
                    {/* Header  */}
                    <div className='flex items-center mb-5'>
                        <h1 className='font-semibold text-2xl lg:text-4xl leading-snug text-[#090F4E] text-center md:text-center lg:text-start'>What people are saying about LeadCRM</h1>
                    </div>

                    {/* Review Data mapped  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 lg:p-0'>
                        {
                            ReviewData?.map((rev, index) => (
                                <div className='bg-[#EEEFFFFC] border-[1px] border-[#BEC4FFFC] rounded-xl p-5' key={index}>
                                    <p className='min-h-[150px]'>
                                        “{rev?.text}“
                                        {
                                            [
                                                { icon: ArrowIcon, stars: 5 },
                                            ]?.map((stars, starIndex) => (
                                                <span className='flex items-center justify-start gap-3' key={starIndex}>
                                                    <span className='bg-white rounded flex items-center justify-center w-[20px] h-[20px] align-middle'>
                                                        <img src={stars?.icon} alt='icon' className='w-8 h-8' />
                                                    </span>
                                                    <span className='flex items-center justify-between gap-1'>
                                                        {
                                                            [...Array(stars?.stars)].map((star, subIndex) => (
                                                                <img src={SingleStarIcon} alt='star' width={18} height={18} key={subIndex} />
                                                            ))
                                                        }
                                                    </span>
                                                </span>
                                            ))
                                        }
                                    </p>

                                    <hr className="border-t border-gray-200 w-full" />
                                    <div className='flex items-center justify-start gap-2 mt-3'>
                                        <div className='flex items-center justify-center'>
                                            <img src={`https://randomuser.me/api/portraits/men/${index * 2}.jpg`} alt="User" className='rounded-full w-10 h-10' />
                                        </div>
                                        <div>
                                            <h2 className='font-semibold text-lg text-[#090F4E]'>{rev?.name}</h2>
                                            <p className='font-light text-sm text-[#696969]'>{rev?.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Review