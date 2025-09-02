import React, { useState } from 'react'
import RobotImage from "../assets/robot.svg"
import { salesSolutionTabsData, salesSolutionTabsTitle } from '../utils/data'

const SalesSolution = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className=' flex items-center justify-center mt-10 mb-[2rem] md:mb-[10rem] relative' id="salesSolution">

            {/* Top left Robot image  */}
            <img src={RobotImage} alt="Image" className='hidden lg:block absolute -top-[80px] left-0' />

            <div className='flex flex-col items-center justify-center gap-5'>

                {/* Top Header */}
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-[#090F4E]'>Complete LinkedIn Sales Solutions</h1>
                <p className='text-[#4D4D4D] text-base text-center lg:text-lg leading-relaxed'>Everything you need for professional LinkedIn prospecting</p>

                {/* Tabs Header  */}
                <div className="w-full border-b border-gray-200 mb-4">
                    <div className="flex flex-wrap justify-center lg:justify-around gap-6 mt-3">
                        {salesSolutionTabsTitle.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center gap-2 px-4 py-2 text-sm sm:text-base transition-colors duration-300
                                        ${activeTab === tab.id
                                        ? "text-blue-900 font-semibold"
                                        : "text-gray-600 hover:text-blue-700"
                                    }`}
                            >
                                {/* Icon */}
                                {tab.icon && (
                                    <span className="flex-shrink-0">
                                        {typeof tab.icon === "string" ? (
                                            <img src={tab.icon} alt={tab.label} className="w-5 h-5" />
                                        ) : (
                                            tab.icon
                                        )}
                                    </span>
                                )}

                                {/* Label */}
                                <span className="text-base sm:text-lg">{tab.label}</span>

                                {/* Active underline */}
                                {activeTab === tab.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-900 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content Header  */}
                <div className="container mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {/* Left section */}
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold ">
                            {salesSolutionTabsData[activeTab - 1]?.label}
                        </p>
                        <span className="px-3 py-1 bg-[#FFDCD4] rounded-full text-[#FF4C51] text-sm sm:text-base">
                            {salesSolutionTabsData[activeTab - 1]?.subLable}
                        </span>
                    </div>
                </div>

                {/* Tab Content */}
                <div className='container flex items-center justify-between px-3 lg:px-0'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-1'>
                        {salesSolutionTabsData[activeTab - 1]?.images?.map((data) => (
                            <div className="container rounded-2xl p-5 shadow " style={{ backgroundColor: salesSolutionTabsData[activeTab - 1]?.color }} key={salesSolutionTabsData[activeTab - 1]?.color + data?.data}>
                                <div>
                                    <p className='text-xl font-semibold leading-relaxed'>
                                        {data?.data}
                                    </p>
                                    <p className='text-[#097737] font-semibold my-2 leading-tight'>
                                        {data?.subData} {">>"}
                                    </p>
                                </div>
                                <img src={data?.icon} alt="image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SalesSolution