import React from 'react'
import MessageIcon from "../assets/message.svg"
import RightArrowIcon from "../assets/rightArrow.svg"
import SupportedLeadCrmImage from "../assets/supportedLeadCrm.png"
import SupportedLeadCrmVerticalImage from "../assets/supportedLeadCrmVertical.png"

const SupportedLeadCRM = () => {
    return (
        <section className=' flex items-center justify-center mt-0 md:mt-10 relative' id="supportedLeadCRM">

            {/* Floating message icon image  */}
            <img
                src={MessageIcon}
                alt="message"
                className="absolute hidden lg:block lg:-top-[90px] lg:right-[30%]"
            />

            <div className='flex flex-col items-center justify-center gap-5'>
                {/* Top Header */}
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-[#090F4E]'>
                    Our Supported LeadCRM
                </h1>

                {/* Sub header */}
                <p className='text-[#4D4D4D] sm:text-sm md:text-lg  leading-relaxed text-center max-w-[80%]' >
                    LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!
                </p>

                {/* Medium and large size device image rendered  */}
                <div className='container hidden md:flex px-7 py-3'>
                    <img src={SupportedLeadCrmImage} alt="LeadCRM" />
                </div>

                {/* Small device image rendered  */}
                <div className='container flex md:hidden'>
                    <img src={SupportedLeadCrmVerticalImage} alt="LeadCRM" />
                </div>

                {/* Bottom button  */}
                <div className='flex items-center justify-center my-5 '>
                    <button type="button" className='bg-[#B3FC6A] text-lg font-semibold p-3 flex items-center justify-center gap-3 text-nowrap rounded-xl w-[296px] h-[60px] hover:shadow-lg'>
                        Try LeadCRM Now
                        <img src={RightArrowIcon} alt="Go" style={{ width: "20px", height: "14px" }} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SupportedLeadCRM