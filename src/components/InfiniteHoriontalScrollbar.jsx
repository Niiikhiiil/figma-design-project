import React from 'react';
import AdvancedAiProductivityIcon from "../assets/advancedAIProductivity.png";
import SeamlessDealManagementIcon from "../assets/seamlessDealManagement.png";
import AdvancedWaterfallEnrichmentIcon from "../assets/advancedWaterfallEnrichment.png";
import BulkExportEnrichIcon from "../assets/bulkExportEnrich.png";
import InstantEmailFinderIcon from "../assets/instantEmailFinder.png";
import CustomFieldMappingIcon from "../assets/customFieldMapping.png";
import OneclickpushtoCRMIcon from "../assets/oneclickpushtoCRM.png";
import AccesstoContactsIcon from "../assets/accesstoContacts.png";
import { motion } from "framer-motion"

const CompanyLogoData = [
    { src: AdvancedAiProductivityIcon, alt: 'Advanced AI Productivity' },
    { src: SeamlessDealManagementIcon, alt: 'Seamless Deal Management' },
    { src: AdvancedWaterfallEnrichmentIcon, alt: 'Advanced Waterfall Enrichment' },
    { src: BulkExportEnrichIcon, alt: 'Bulk Export & Enrich' },
    { src: InstantEmailFinderIcon, alt: 'Instant Email Finder' },
    { src: CustomFieldMappingIcon, alt: 'Custom Field Mapping' },
    { src: OneclickpushtoCRMIcon, alt: 'One click push to CRM' },
    { src: AccesstoContactsIcon, alt: 'Access to 700M+ Contacts' },
];

const InfiniteHoriontalScrollbar = () => {
    return (<>
        <div className="flex p-5 h-36 z-20 bg-white">

            <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10  after:content-['']">
                <motion.div
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: '-50%' }}
                    className="flex flex-none gap-16 pr-16"
                >
                    {[...new Array(2)].fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {CompanyLogoData.map(({ src, alt }, index) => {
                                const [first, ...rest] = alt.split(" ");
                                return (
                                    <div key={alt} className="flex items-center gap-2">
                                        <img src={src} alt={alt} className="h-8 w-auto flex-none" />
                                        {index % 2 === 0 ?
                                            <p className="font-extralight">{first}&nbsp;
                                                <span className="font-semibold">{rest.join(" ")}</span>
                                            </p> :
                                            <p className="font-semibold">{first}&nbsp;
                                                <span className="font-extralight">{rest.join(" ")}</span>
                                            </p>
                                        }
                                    </div>
                                );
                            })}

                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
        <hr className="border-t border-gray-200 w-full" />

    </>
    )
};

export default InfiniteHoriontalScrollbar;
