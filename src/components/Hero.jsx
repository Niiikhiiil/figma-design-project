import React from 'react';
import HeroBG from "../assets/heroBackground.svg";
import RocketIcon from "../assets/rocket.svg";
import ChromeHalfIcon from "../assets/chromeHalf.svg";
import WorksWith1Icon from "../assets/worksWith1.svg";
import WorksWith2Icon from "../assets/worksWith2.svg";
import WorksWith3Icon from "../assets/worksWith3.svg";
import ArrowIcon from "../assets/arrow.svg";
import StarIcon from "../assets/star.svg";
import ChromeIcon from "../assets/chrome.svg";

const Hero = () => {
    return (
        <div
            id="hero"
            className="min-h-screen lg:min-h-[80vh] flex items-center justify-center relative overflow-hidden z-10 bg-center bg-cover pt-5 md:p-2 px-2.5 md:px-2 mt-15 md:mt-2"
            style={{ backgroundImage: `url(${HeroBG})` }}
        >
            <div className='flex items-center justify-center flex-col'>

                {/* Rocket header  */}
                <div className='flex items-center border-1 border-[#9ACCFF] rounded-full py-2 px-2 md:px-2.5 gap-1 md:gap:1.5 leading-tight mb-5'>
                    <img src={RocketIcon} alt='rocket' width={20} height={20} />Thousands of Professional using LeadCRM
                </div>

                <div className='w-full mb-5'>
                    {/* Heading Lead Text  */}
                    <div className="text-center h-full mb-5">
                        <h1 className='relative p-0 m-0 transform translate-x-0 translate-y-0 flex flex-col items-center justify-center text-center'>
                            <span className="block font-semibold text-2xl md:text-6xl">
                                LinkedIn CRM Integration <br />
                            </span>

                            <span className='block font-semibold text-2xl md:text-6xl '>
                                Capture, Sync and Enrich in&nbsp;
                                <span className='text-[#2d96bd] relative text-nowrap'>
                                    Both Ways
                                    <span className="bg-[#fbde6a] h-5 absolute -bottom-5 left-1 w-full [clip-path:polygon(0_0,100%_0,0_100%)] " />
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* Sub Head Text  */}
                    <p className="text-lg md:text-xl text-[#363636] max-w-5xl mx-auto leading-8 text-center font-semibold">
                        Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
                    </p>
                </div>

                {/* Work with text and logos  */}
                <div className="mb-5 relative flex items-center justify-between w-auto p-4 flex-col gap-2 md:flex-row rounded-2xl bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold overflow-hidden">
                    <span>Works with</span>

                    <div className='flex items-center justify-between'>
                        {[
                            { icon: WorksWith1Icon, color: "#FF7A59" },
                            { icon: WorksWith2Icon, color: "#21844A" },
                            { icon: WorksWith3Icon, color: "#FFFFFF" }
                        ]?.map((icon, index) => (
                            <div
                                key={index}
                                className="rounded-full w-15 h-15 flex items-center justify-center mx-2"
                                style={{ backgroundColor: icon.color }}
                            >
                                <img src={icon.icon} alt={`icon-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stars review  */}
                <div className="mb-5 flex items-center justify-around mx-auto gap-2 md:gap-4">
                    {
                        [
                            { icon: ChromeHalfIcon, stars: 5 },
                            { icon: ArrowIcon, stars: 5 },
                        ]?.map((stars, index) => (
                            <div className='flex items-center justify-between gap-2 md:gap-5 ' key={index}>
                                <div className='bg-white rounded-md w-7 h-7 md:w-10 md:h-10 flex items-center justify-center'>
                                    <img src={stars?.icon} alt='icon' />
                                </div>
                                <div className='flex items-center justify-between gap-1 md:gap-2'>
                                    {
                                        [...Array(stars?.stars)].map((star, subIndex) => (
                                            <img src={StarIcon} alt='star' key={subIndex} className='w-4 h-4 md:w-5 md:h-5' />
                                        ))
                                    }

                                    <span className='text-xs md:text-lg'>{stars.stars}/5</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* chrome and free trail button  */}
                <div className="flex items-center justify-around mb-5 gap-5 flex-col md:flex-row">
                    <button className='flex items-center bg-[#373737] py-2.5 px-4 rounded-3xl justify-between gap-5 text-white w-full' >
                        <div className='flex-1 flex-col items-start'>
                            <div className='font-extralight text-left'>Availble In</div>
                            <div className='text-nowrap'>Chrome Web Store</div>
                        </div>
                        <div className='bg-white rounded-full flex items-center justify-center w-10 h-10'>
                            <img src={ChromeIcon} alt='Chrome' />
                        </div>
                    </button>
                    <button className='flex items-center text-xl justify-center py-2.5 px-6.5 rounded-3xl bg-[#B3FC6A] h-17 w-full'>
                        <p className='font-semibold'>Get Free Trial Now!</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
