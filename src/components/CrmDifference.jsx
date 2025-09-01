import React from 'react'
import WithoutLeadCRMIcon from "../assets/withoutLeadCrm.svg"
import WithLeadCRMIcon from "../assets/withLeadCrm.svg"
import smallLeadCRMIcon from "../assets/smallLeadCrm.svg"
import SyncIcon from "../assets/sync.svg"
import ContactsIcon from "../assets/contacts.svg"
import StackedIcon from "../assets/stacked.svg"
import BrainIcon from "../assets/brain.svg"
import CrossIcon from "../assets/cross.svg"
import SaveTextIcon from "../assets/save40Text.svg"

const Data = [
    {
        image: WithoutLeadCRMIcon,
        smallIcon: null,
        title: "Without LeadCRM",
        shadow: false,
        subText: "",
        bgColor: "#FFF7F8",
        details: [
            {
                title: "Manual Data Entry",
                cons: "3+ Hours wasted daily",
                subText: "Copying LinkedIn contacts to CRM manually plus losing conversation history"
            },
            {
                title: "Incomplete Data",
                cons: "60% Data Incomplete",
                subText: "LinkedIn profiles missing Email and Phones from 700M+ Database"
            },
            {
                title: "No CRM Visibility",
                cons: "Zero context available",
                subText: "Can`t see existing CRM contacts when browsing LinkedIn profiles"
            },
            {
                title: "Limited Productivity",
                cons: "No smart assistance",
                subText: "Writing messages manually plus no AI assistant for reply, Invite or comments."
            },
        ]
    },
    {
        image: WithLeadCRMIcon,
        smallIcon: smallLeadCRMIcon,
        title: "With LeadCRM",
        subText: "4+ Hours/day Saved",
        bgColor: "#FFFFFF",
        shadow: true,
        details: [
            {
                title: "Complete Bi-Directional Sync",
                cons: "",
                subText: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
                icon: SyncIcon,
            },
            {
                title: "700M+ Contacts + Enrichment",
                cons: "",
                subText: "Get verified emails and phone numbers from a vast global database.",
                icon: ContactsIcon,
            },
            {
                title: "CRM Overlay on LinkedIn",
                cons: "",
                subText: "See full CRM insights directly on LinkedIn profiles without switching tabs.",
                icon: StackedIcon,
            },
            {
                title: "AI Response + Templates + Bulk Exports",
                cons: "",
                subText: "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
                icon: BrainIcon
            },
        ]
    }
]

const CrmDifference = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
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
                    style={{ backgroundColor: Data[0].bgColor, borderColor: "#FF4C51" }}
                >
                    <div className="p-3 w-full">
                        <img src={Data[0]?.image} alt={Data[0]?.title} className="mx-auto" />
                        <h1 className="text-[#D24B68] font-semibold text-2xl mt-6 mb-4 text-center md:text-left">
                            {Data[0]?.title}
                        </h1>

                        <div>
                            {Data[0].details.map((det, index) => (
                                <div
                                    className="flex gap-5 my-4"
                                    key={index}
                                >
                                    <img src={CrossIcon} alt="cons" width={24} height={24} />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h2 className="font-semibold text-lg">{det?.title}</h2>
                                            <span className="bg-[#FFDCD4] rounded-full text-sm px-2 py-1 text-[#FF4C51] font-medium">
                                                {det?.cons}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 text-base">{det?.subText}</p>
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
                        backgroundColor: Data[1].bgColor,
                        boxShadow: Data[1]?.shadow && "0px 8px 24px 0px #959DA533",
                    }}
                >
                    <div className="p-3 w-full">
                        <img src={Data[1]?.image} alt={Data[1]?.title} className="mx-auto" />
                        <div className="flex items-center gap-2 my-6">
                            <h1 className="text-[#D24B68] font-semibold text-2xl">
                                {Data[1]?.title}
                            </h1>
                            <img src={Data[1]?.smallIcon} width={20} height={20} alt="icon" />
                            <span className="bg-[#E6FFF1] rounded-full text-sm px-2 py-1 text-[#097737] font-medium">
                                {Data[1]?.subText}
                            </span>
                        </div>

                        <div>
                            {Data[1].details.map((det, index) => (
                                <div
                                    className="flex gap-5 my-4"
                                    key={index}
                                >
                                    <img src={det?.icon} alt="pros" width={36} height={36} />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h2 className="font-semibold text-lg">{det?.title}</h2>
                                            {det?.cons && (
                                                <span className="bg-[#FFDCD4] rounded-full text-sm px-2 py-1 text-[#FF4C51] font-medium">
                                                    {det?.cons}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-700 text-base">{det?.subText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer button */}
            <div className="flex flex-col items-center justify-center my-10 relative">
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

export default CrmDifference