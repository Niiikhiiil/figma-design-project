import React, { useState } from 'react'
import Message2Icon from "../assets/message2.png"

const FaqData = [
    {
        que: "What exactly does LeadCRM do?",
        answer: "LeadCRM is a browser extension that seamlessly connects your LinkedIn account (including Sales Navigator) to your CRM. It eliminates manual data entry by allowing you to instantly sync entire LinkedIn profiles—including contact information, experience, and skills—to your CRM in a single click. It’s designed to save your sales team dozens of hours a month, prevent data errors, and ensure your CRM is always up-to-date."
    },
    {
        que: "Which CRMs do you integrate with?",
        answer: "We offer deep, bi-directional integrations with the most popular CRMs in the industry, including HubSpot, Salesforce, Zoho and Pipedrive. Our “two-way sync” means that data flows seamlessly between LinkedIn and your CRM, so your records are always enriched and current on both platforms."
    },
    {
        que: "Can I integrate my CRM if its not supported natively?",
        answer: "Yes, you can integrate any CRM with our system as long as it supports certain APIs. Reach out to support@leadcrm.io to learn more."
    },
    {
        que: "Can I control what information gets synced to my CRM?",
        answer: "Yes, you have complete control. Our flexible field mapping allows you to precisely define which data from a LinkedIn profile goes into which specific field in your CRM. This ensures your data is perfectly organized according to your team’s workflow and prevents messy, inconsistent records. You can set it up once, and every sync will follow your rules automatically."
    },
    {
        que: "How is LeadCRM different from other tools?",
        answer: "LeadCRM stands out in three key ways: True Bi-Directional Sync: Unlike tools that only push data one way, we keep both LinkedIn and your CRM perfectly in sync. Waterfall Enrichment: We use an advanced process to find the most accurate and up-to-date contact information for your prospects. Complete Profile Sync: We capture the entire profile, not just bits and pieces, and give you full control over where that data lands in your CRM."
    },
    {
        que: "Is LeadCRM safe and GDPR compliant?",
        answer: "Absolutely. We take data security and privacy very seriously. LeadCRM is built with enterprise-grade security practices to ensure your data and your customers’ data are always protected. We are fully GDPR compliant, and our processes are designed to help you maintain compliance while conducting your sales activities."
    },
    {
        que: "What kind of support can I expect from LeadCRM?",
        answer: "We offer dedicated customer support to ensure you get the most out of LeadCRM. Our team is available via email and live chat to help you with everything from initial setup to optimizing your workflow. Pro-tier customers also receive a dedicated account manager for priority support. We’re committed to being responsive and helpful, so you’re never left without an answer."
    },
]

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className=' flex items-center justify-center mt-10 relative  p-5 my-5 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-5 '>
                {/* Top Header */}
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-[#090F4E] mt-6'>Frequently Asked Questions</h1>
                <div className="w-[70vw] ">
                    {FaqData?.map((item, index) => (
                        <div key={index} >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium text-lg focus:outline-none"
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
            <img src={Message2Icon} alt="message" className='hidden absolute md:block md:bottom-1 md:right-0' />
        </section>
    )
}

export default Faq