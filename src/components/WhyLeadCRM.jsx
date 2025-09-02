import React from 'react'
import CrossIcon from "../assets/cross.svg"
import SaveTextIcon from "../assets/save40Text.svg"
import { WhyLeadCRMData } from '../utils/data'


const WhyLeadCRM = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12" id="whyLeadCrm">
            {/* Header */}
            <div className="mb-10 text-center max-w-3xl">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-snug">
                    Every LinkedIn Prospector faces these daily challenges
                </h1>
            </div>

            {/* CRM difference cards */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                {/* Card 1 */}
                <div
                    className="flex flex-col items-center rounded-3xl p-5 w-full md:w-1/2 lg:w-[30%] min-h-[60vh] lg:min-h-[80vh] transition-all duration-300 hover:border hover:-translate-y-2"
                    style={{ backgroundColor: WhyLeadCRMData[0].bgColor, borderColor: "#FF4C51" }}
                >
                    <div className="p-3 w-full">
                        <img src={WhyLeadCRMData[0]?.image} alt={WhyLeadCRMData[0]?.title} className="mx-auto" />
                        <h1 className="text-[#D24B68] font-semibold text-2xl mt-6 mb-4 text-start  lg:text-left">
                            {WhyLeadCRMData[0]?.title}
                        </h1>

                        <div>
                            {WhyLeadCRMData[0].details.map((det, index) => (
                                <div
                                    className="flex items-center gap-2 lg:gap-5 my-4"
                                    key={index}
                                    id={index === 3 ? "lastone" : det?.title}
                                >
                                    <img src={CrossIcon} alt="cons" width={24} height={24} />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-0 lg:gap-2 mb-2">
                                            <h2 className="font-semibold text-xs lg:text-lg">{det?.title}</h2>
                                            <span className="bg-[#FFDCD4] rounded-full text-xs lg:text-base px-[2px] lg:p-1 lg:px-2 text-[#FF4C51] font-medium">
                                                {det?.cons}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 text-sm lg:text-base">{det?.subText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* VS Divider */}
                <div className="hidden md:flex flex-col items-center justify-center min-h-[70vh]">
                    <div className="flex-1 w-px bg-gray-300"></div>
                    <div className="my-4 font-semibold text-2xl">VS</div>
                    <div className="flex-1 w-px bg-gray-300"></div>
                </div>

                {/* Card 2 */}
                <div
                    className="flex flex-col items-center rounded-3xl p-5 w-full md:w-1/2 lg:w-[30%] min-h-[60vh] lg:min-h-[80vh] transition-all duration-300 hover:border hover:-translate-y-2"
                    style={{
                        backgroundColor: WhyLeadCRMData[1].bgColor,
                        boxShadow: WhyLeadCRMData[1]?.shadow && "0px 8px 24px 0px #959DA533",
                    }}
                >
                    <div className="p-3 w-full">
                        <img src={WhyLeadCRMData[1]?.image} alt={WhyLeadCRMData[1]?.title} className="mx-auto" />
                        <div className="flex items-center gap-2 my-6 flex-wrap lg:flex-nowrap">
                            <h1 className="text-[#D24B68] font-semibold text-2xl">
                                {WhyLeadCRMData[1]?.title}
                            </h1>
                            <img src={WhyLeadCRMData[1]?.smallIcon} width={20} height={20} alt="icon" />
                            <span className="bg-[#E6FFF1] rounded-full text-sm px-2 py-1 text-[#097737] font-medium">
                                {WhyLeadCRMData[1]?.subText}
                            </span>
                        </div>

                        <div>
                            {WhyLeadCRMData[1].details.map((det, index) => (
                                <div
                                    className="flex gap-5 my-4"
                                    key={index}
                                >
                                    <img src={det?.icon} alt="pros" width={36} height={36} />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h2 className="font-semibold text-xs lg:text-lg">{det?.title}</h2>
                                            {det?.cons && (
                                                <span className="bg-[#FFDCD4] rounded-full text-sm px-2 py-1 text-[#FF4C51] font-medium">
                                                    {det?.cons}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-700 text-sm lg:text-base">{det?.subText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer button */}
            <div className="flex flex-col items-center justify-center my-10 relative" id="btnStartUsingLeadCrm">
                <button
                    type="button"
                    className="bg-[#B3FC6A] text-lg font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Start Using LeadCRM Now
                </button>

                <div className="hidden md:block absolute -bottom-10 -right-[280px]">
                    <img
                        src={SaveTextIcon}
                        alt="Save 40+ hours every Month"
                        title="Save 40+ hours every Month"
                    />
                </div>
            </div>
        </div>

    )
}

export default WhyLeadCRM