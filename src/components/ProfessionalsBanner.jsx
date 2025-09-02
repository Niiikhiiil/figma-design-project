import React from 'react'
import JoinThousandsOfProffesionalImage from "../assets/joinProffesional.svg"
import RightArrowIcon from "../assets/rightArrow.svg"

const ProfessionalsBanner = () => {
    return (
        <section className=' flex items-center justify-center mt-10 relative bg-[#EAEFFA] p-5 my-5 mx-auto' id="professionalsBanner">
            <div className='flex flex-col items-center justify-center gap-5 '>
                {/* Top Header */}
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-[#090F4E] mt-6 text-center'>Join Thousands of Professionals Using LeadCRM</h1>

                {/* Banner Image  */}
                <img src={JoinThousandsOfProffesionalImage} alt="Image" />

                {/* Bottom button  */}
                <div className='flex items-center justify-center my-5 '>
                    <button type="button" className='bg-[#B3FC6A] text-lg font-semibold p-3 flex items-center justify-center gap-3 text-nowrap rounded-xl w-[296px] h-[60px] hover:shadow-lg'>
                        Get Started Today
                        <img src={RightArrowIcon} alt="Go" style={{ width: "20px", height: "14px" }} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProfessionalsBanner