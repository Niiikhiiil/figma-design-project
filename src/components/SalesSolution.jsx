import React, { useState } from 'react'
import BrainIcon from "../assets/brain.svg"
import AdvancedAiProductivityIcon from "../assets/advancedAIProductivity.png";
import BulkExportEnrichIcon from "../assets/bulkExportEnrich.png";
import OneclickpushtoCRMIcon from "../assets/oneclickpushtoCRM.png";
import FirstCardImage from "../assets/AI-Comment-image-1-768x603.png"
import SecondCardImage from "../assets/Template-imges-2-768x529.png"
import RobotImage from "../assets/robot.svg"


const tabs = [
    { id: 1, label: "CRM Data Enrichment", icon: BrainIcon },
    { id: 2, label: "CRM Data Sync", icon: OneclickpushtoCRMIcon },
    { id: 3, label: "Bulk Export & Enrichment", icon: BulkExportEnrichIcon },
    { id: 4, label: "AI Productivity", icon: AdvancedAiProductivityIcon },
];

const tabData = [
    {
        id: 1,
        label: "It`s hard to find the accurate contact data for every prospects by",
        subLable: "Incomplete Data",
        color: "#f0f4fd",
        images: [
            {
                data: "Get Access to 700M+ Prospects.",
                subData: "Try LeadCRM Data Enrichment",
                icon: FirstCardImage
            }, {
                data: "Capture Every Lead. Every Time.",
                subData: "Try LeadCRM Data Enrichment",
                icon: SecondCardImage
            }]
    },
    {
        id: 2,
        label: "40+ hours lost to copy-paste. Every. Single. Month..",
        subLable: "Lost Lead Context", color: "#ffffce",
        images: [{
            data: "The Solution? LeadCRM's Instant Data Sync.",
            subData: "Try LeadCRM Data Sync",
            icon: SecondCardImage
        }, {
            data: "Unlock instant CRM insights on every profile you visit.",
            subData: "Try LeadCRM Data Overlay",
            icon: FirstCardImage
        }]
    },
    {
        id: 3,
        label: "Your Sales Navigator Workflow is Broken.",
        subLable: "Lost Productivity",
        color: "#eceaff",
        images: [{
            data: "Enrich & Export 250 Profiles in Just 60 Seconds.",
            subData: "Try LeadCRM Bulk Export",
            icon: FirstCardImage
        }, {
            data: "Export & enrich profiles to the CRM or G-Sheet",
            subData: "Try LeadCRM Bulk Export",
            icon: SecondCardImage
        }]
    },
    {
        id: 4, label: "Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink. ",
        subLable: "No Smart Assistance",
        color: "#ffe9fe",
        images: [{
            data: "Get the same high-impact engagement in 80% less time.",
            subData: "Try LeadCRM AI Response", icon: SecondCardImage
        }, {
            data: "Use Shortcuts to reply faster.",
            subData: "Try LeadCRM AI Response", icon: FirstCardImage
        }]
    },
]

const SalesSolution = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <section className=' flex items-center justify-center mt-10 mb-[10rem] relative'>
            <img src={RobotImage} alt="Image" className='absolute -top-[80px] left-0' />
            <div className='flex flex-col items-center justify-center gap-5'>
                {/* Top Header */}
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-[#090F4E]'>Complete LinkedIn Sales Solutions</h1>
                <p className='text-[#4D4D4D] text-lg leading-relaxed'>Everything you need for professional LinkedIn prospecting</p>

                {/* Tabs Header  */}
                <div className="w-full border-b border-gray-200 mb-4">
                    <div className="flex flex-wrap justify-center lg:justify-around gap-6 mt-3">
                        {tabs.map((tab) => (
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
                            {tabData[activeTab - 1]?.label}
                        </p>
                        <span className="px-3 py-1 bg-[#FFDCD4] rounded-full text-[#FF4C51] text-sm sm:text-base">
                            {tabData[activeTab - 1]?.subLable}
                        </span>
                    </div>
                </div>

                {/* Tab Content */}
                <div className='container flex items-center justify-between px-3 lg:px-0'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-1'>
                        {tabData[activeTab - 1]?.images?.map((data) => (
                            <div className="container rounded-2xl p-5 shadow " style={{ backgroundColor: tabData[activeTab - 1]?.color }} key={tabData[activeTab - 1]?.color + data?.data}>
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