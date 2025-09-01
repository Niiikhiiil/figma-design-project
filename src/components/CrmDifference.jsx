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
        <div className='flex items-center min-h-screen justify-center flex-col mt-15 pb-15'>

            {/* Header  */}
            <div className='mb-10'>
                <h1 className='font-semibold text-4xl'>Every LinkedIn Prospector faces these daily challenges</h1>
            </div>

            {/* CRM difference cards  */}
            <div className='flex items-center justify-center gap-5 mt-5 flex-col md:flex-row mb-10'>
                <div className='flex items-center flex-col rounded-3xl p-3 w-full md:w-[30%]  lg:min-h-[80vh] hover:border-[1px] hover:w-[calc(100% - 2px)] hover:-translate-y-1 transform-all duration-200' style={{ backgroundColor: Data[0].bgColor, borderColor: "#FF4C51" }}>
                    <div className='p-3'>
                        <div>
                            <img src={Data[0]?.image} />
                        </div>
                        <h1 className='text-[#D24B68] font-semibold text-2xl my-4'>{Data[0]?.title}</h1>
                        <div>
                            {
                                Data[0].details.map((det, index) => (
                                    <div className='flex items-center justify-between gap-5 leading-relaxed my-3' key={index}>
                                        <div className='flex items-center justify-center'>
                                            <img src={CrossIcon} alt='cons' width={24} height={24} />
                                        </div>
                                        <div className='flex-1 flex-col'>
                                            <div className='flex flex-row items-center gap-2 justify-start mb-2'>
                                                <div>
                                                    <h2 className='font-semibold text-xl'>{det?.title}</h2>
                                                </div>
                                                <div className='bg-[#FFDCD4] rounded-full text-sm px-2 py-1 text-[#FF4C51] font-medium'> {det?.cons}</div>
                                            </div>
                                            <div className='font-[400] text-lg'>
                                                <p>{det?.subText}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center min-h-[70vh]">
                    <div className="flex-2 w-px bg-gray-400"></div>

                    <div className="my-4 font-semibold text-2xl">VS</div>

                    <div className="flex-2 w-px bg-gray-400"></div>
                </div>

                <div className='flex items-center flex-col rounded-3xl p-3 py-4 w-full md:w-[30%]  lg:min-h-[80vh] hover:border-[1px] hover:w-[calc(100% - 2px)] hover:-translate-y-1 transform-all duration-200' style={{ backgroundColor: Data[1].bgColor, boxShadow: Data[1]?.shadow && " 0px 8px 24px 0px #959DA533" }}>
                    <div className='p-3'>
                        <div>
                            <img src={Data[1]?.image} />
                        </div>
                        <div className='flex items-center justify-start gap-1'>
                            <h1 className='text-[#D24B68] font-semibold text-2xl my-4'>{Data[1]?.title}</h1>
                            <img src={Data[1]?.smallIcon} width={20} height={20} />
                            <div className='bg-[#E6FFF1] rounded-full text-sm px-2 py-1 text-[#097737] font-medium'> {Data[1]?.subText}</div>
                        </div>
                        <div>
                            {
                                Data[1].details.map((det, index) => (
                                    <div className='flex items-center justify-between gap-5 leading-relaxed my-3' key={index}>
                                        <div className='flex items-center justify-center'>
                                            <img src={det?.icon} alt='cons' width={36} height={36} />
                                        </div>
                                        <div className='flex-1 flex-col'>
                                            <div className='flex flex-row items-center gap-2 justify-start mb-2'>
                                                <div>
                                                    <h2 className='font-semibold text-lg'>{det?.title}</h2>
                                                </div>
                                                {det?.cons && <div className='bg-[#FFDCD4] rounded-full text-sm px-2 py-1 text-[#FF4C51] font-medium'> {det?.cons}</div>}
                                            </div>
                                            <div className='font-[400] text-lg'>
                                                <p>{det?.subText}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer button  */}
            <div className='flex items-center justify-center my-5 relative'>
                <button type="button" className='bg-[#B3FC6A] text-lg font-semibold p-3 flex  items-center justify-center text-nowrap rounded-xl w-[296px] h-[60px] shadow-lg'>
                    Start Using LeadCRM Now
                </button>

                <div className='hidden md:block absolute -bottom-9 -right-[280px]'>
                    <img src={SaveTextIcon} alt="Save 40+ hours every Month" title='Save 40+ hours every Month' />
                </div>
            </div>
        </div>
    )
}

export default CrmDifference