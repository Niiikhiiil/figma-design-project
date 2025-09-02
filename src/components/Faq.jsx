import React, { useState } from 'react'
import { FaqData } from '../utils/data';
import Message2Icon from "../assets/message2.png"



const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='flex items-center justify-center mt-0 md:mt-10 relative  p-5 my-2 lg:my-5 mx-auto' id="faq">
            <div className='flex flex-col items-center justify-center gap-5 '>

                {/* Top Header */}
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-[#090F4E] mt-6'>Frequently Asked Questions</h1>

                {/* FAQ Accordian  */}
                <div className="w-[70vw] ">
                    {FaqData?.map((item, index) => (
                        <div key={index} >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium text-lg focus:outline-none cursor-pointer"
                            >
                                <span className="flex-1">
                                    {index + 1}. {item.que}
                                </span>
                                <span className="text-4xl font-bold text-[#1b1b50]">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="bg-[#FFF5F2] text-gray-700 text-base p-4 rounded-lg mb-4  transition-all duration-500">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom right message icon  */}
            <img src={Message2Icon} alt="message" className='hidden absolute md:block md:bottom-1 md:right-0' id="message" />
        </section>
    )
}

export default Faq