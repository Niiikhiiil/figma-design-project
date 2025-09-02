import AdvancedAiProductivityIcon from "../assets/advancedAIProductivity.png";
import SeamlessDealManagementIcon from "../assets/seamlessDealManagement.png";
import AdvancedWaterfallEnrichmentIcon from "../assets/advancedWaterfallEnrichment.png";
import BulkExportEnrichIcon from "../assets/bulkExportEnrich.png";
import InstantEmailFinderIcon from "../assets/instantEmailFinder.png";
import CustomFieldMappingIcon from "../assets/customFieldMapping.png";
import OneclickpushtoCRMIcon from "../assets/oneclickpushtoCRM.png";
import AccesstoContactsIcon from "../assets/accesstoContacts.png";

import WithoutLeadCRMIcon from "../assets/withoutLeadCrm.svg";
import WithLeadCRMIcon from "../assets/withLeadCrm.svg";
import smallLeadCRMIcon from "../assets/smallLeadCrm.svg";
import SyncIcon from "../assets/sync.svg";
import ContactsIcon from "../assets/contacts.svg";
import StackedIcon from "../assets/stacked.svg";
import BrainIcon from "../assets/brain.svg";

import NumberOneIcon from "../assets/numberOne.svg";
import NumberTwoIcon from "../assets/numberTwo.svg";
import NumberThreeIcon from "../assets/numberThree.svg";
import NumberFourIcon from "../assets/numberFour.svg";
import oneImageIcon from "../assets/oneImage.svg";
import twoImageIcon from "../assets/twoImage.svg";
import threeImageIcon from "../assets/threeImage.svg";
import fourImageIcon from "../assets/fourImage.svg";

import FirstCardImage from "../assets/AI-Comment-image-1-768x603.png";
import SecondCardImage from "../assets/Template-imges-2-768x529.png";

export const ContinousBarData = [
  { src: AdvancedAiProductivityIcon, alt: "Advanced AI Productivity" },
  { src: SeamlessDealManagementIcon, alt: "Seamless Deal Management" },
  {
    src: AdvancedWaterfallEnrichmentIcon,
    alt: "Advanced Waterfall Enrichment",
  },
  { src: BulkExportEnrichIcon, alt: "Bulk Export & Enrich" },
  { src: InstantEmailFinderIcon, alt: "Instant Email Finder" },
  { src: CustomFieldMappingIcon, alt: "Custom Field Mapping" },
  { src: OneclickpushtoCRMIcon, alt: "One click push to CRM" },
  { src: AccesstoContactsIcon, alt: "Access to 700M+ Contacts" },
];

export const WhyLeadCRMData = [
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
        subText:
          "Copying LinkedIn contacts to CRM manually plus losing conversation history",
      },
      {
        title: "Incomplete Data",
        cons: "60% Data Incomplete",
        subText:
          "LinkedIn profiles missing Email and Phones from 700M+ Database",
      },
      {
        title: "No CRM Visibility",
        cons: "Zero context available",
        subText:
          "Can`t see existing CRM contacts when browsing LinkedIn profiles",
      },
      {
        title: "Limited Productivity",
        cons: "No smart assistance",
        subText:
          "Writing messages manually plus no AI assistant for reply, Invite or comments.",
      },
    ],
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
        subText:
          "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
        icon: SyncIcon,
      },
      {
        title: "700M+ Contacts + Enrichment",
        cons: "",
        subText:
          "Get verified emails and phone numbers from a vast global database.",
        icon: ContactsIcon,
      },
      {
        title: "CRM Overlay on LinkedIn",
        cons: "",
        subText:
          "See full CRM insights directly on LinkedIn profiles without switching tabs.",
        icon: StackedIcon,
      },
      {
        title: "AI Response + Templates + Bulk Exports",
        cons: "",
        subText:
          "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
        icon: BrainIcon,
      },
    ],
  },
];

export const HowItWorksData = [
  {
    numberIcon: NumberOneIcon,
    title: "Install the Extension",
    subTitle:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    image: oneImageIcon,
  },
  {
    numberIcon: NumberTwoIcon,
    title: "Browse LinkedIn",
    subTitle:
      "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    image: twoImageIcon,
  },
  {
    numberIcon: NumberThreeIcon,
    title: "Get Enriched Data",
    subTitle: `Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.`,
    image: threeImageIcon,
  },
  {
    numberIcon: NumberFourIcon,
    title: "Sync to CRM Instantly",
    subTitle:
      "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
    image: fourImageIcon,
  },
];

export const ReviewData = [
  {
    name: "David Fincher",
    location: "On Capterra",
    text: "Reliable Data Sync I`ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
  },
  {
    name: "Lillian Williams",
    location: "On Capterra",
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
  },
  {
    name: "David Fincher",
    location: "On Capterra",
    text: "Reliable Data Sync I`ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
  },
];

export const salesSolutionTabsTitle = [
  { id: 1, label: "CRM Data Enrichment", icon: BrainIcon },
  { id: 2, label: "CRM Data Sync", icon: OneclickpushtoCRMIcon },
  { id: 3, label: "Bulk Export & Enrichment", icon: BulkExportEnrichIcon },
  { id: 4, label: "AI Productivity", icon: AdvancedAiProductivityIcon },
];

export const salesSolutionTabsData = [
  {
    id: 1,
    label: "It`s hard to find the accurate contact data for every prospects by",
    subLable: "Incomplete Data",
    color: "#f0f4fd",
    images: [
      {
        data: "Get Access to 700M+ Prospects.",
        subData: "Try LeadCRM Data Enrichment",
        icon: FirstCardImage,
      },
      {
        data: "Capture Every Lead. Every Time.",
        subData: "Try LeadCRM Data Enrichment",
        icon: SecondCardImage,
      },
    ],
  },
  {
    id: 2,
    label: "40+ hours lost to copy-paste. Every. Single. Month..",
    subLable: "Lost Lead Context",
    color: "#ffffce",
    images: [
      {
        data: "The Solution? LeadCRM's Instant Data Sync.",
        subData: "Try LeadCRM Data Sync",
        icon: SecondCardImage,
      },
      {
        data: "Unlock instant CRM insights on every profile you visit.",
        subData: "Try LeadCRM Data Overlay",
        icon: FirstCardImage,
      },
    ],
  },
  {
    id: 3,
    label: "Your Sales Navigator Workflow is Broken.",
    subLable: "Lost Productivity",
    color: "#eceaff",
    images: [
      {
        data: "Enrich & Export 250 Profiles in Just 60 Seconds.",
        subData: "Try LeadCRM Bulk Export",
        icon: FirstCardImage,
      },
      {
        data: "Export & enrich profiles to the CRM or G-Sheet",
        subData: "Try LeadCRM Bulk Export",
        icon: SecondCardImage,
      },
    ],
  },
  {
    id: 4,
    label:
      "Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink. ",
    subLable: "No Smart Assistance",
    color: "#ffe9fe",
    images: [
      {
        data: "Get the same high-impact engagement in 80% less time.",
        subData: "Try LeadCRM AI Response",
        icon: SecondCardImage,
      },
      {
        data: "Use Shortcuts to reply faster.",
        subData: "Try LeadCRM AI Response",
        icon: FirstCardImage,
      },
    ],
  },
];

export const FaqData = [
  {
    que: "What exactly does LeadCRM do?",
    answer:
      "LeadCRM is a browser extension that seamlessly connects your LinkedIn account (including Sales Navigator) to your CRM. It eliminates manual data entry by allowing you to instantly sync entire LinkedIn profiles—including contact information, experience, and skills—to your CRM in a single click. It’s designed to save your sales team dozens of hours a month, prevent data errors, and ensure your CRM is always up-to-date.",
  },
  {
    que: "Which CRMs do you integrate with?",
    answer:
      "We offer deep, bi-directional integrations with the most popular CRMs in the industry, including HubSpot, Salesforce, Zoho and Pipedrive. Our “two-way sync” means that data flows seamlessly between LinkedIn and your CRM, so your records are always enriched and current on both platforms.",
  },
  {
    que: "Can I integrate my CRM if its not supported natively?",
    answer:
      "Yes, you can integrate any CRM with our system as long as it supports certain APIs. Reach out to support@leadcrm.io to learn more.",
  },
  {
    que: "Can I control what information gets synced to my CRM?",
    answer:
      "Yes, you have complete control. Our flexible field mapping allows you to precisely define which data from a LinkedIn profile goes into which specific field in your CRM. This ensures your data is perfectly organized according to your team’s workflow and prevents messy, inconsistent records. You can set it up once, and every sync will follow your rules automatically.",
  },
  {
    que: "How is LeadCRM different from other tools?",
    answer:
      "LeadCRM stands out in three key ways: True Bi-Directional Sync: Unlike tools that only push data one way, we keep both LinkedIn and your CRM perfectly in sync. Waterfall Enrichment: We use an advanced process to find the most accurate and up-to-date contact information for your prospects. Complete Profile Sync: We capture the entire profile, not just bits and pieces, and give you full control over where that data lands in your CRM.",
  },
  {
    que: "Is LeadCRM safe and GDPR compliant?",
    answer:
      "Absolutely. We take data security and privacy very seriously. LeadCRM is built with enterprise-grade security practices to ensure your data and your customers’ data are always protected. We are fully GDPR compliant, and our processes are designed to help you maintain compliance while conducting your sales activities.",
  },
  {
    que: "What kind of support can I expect from LeadCRM?",
    answer:
      "We offer dedicated customer support to ensure you get the most out of LeadCRM. Our team is available via email and live chat to help you with everything from initial setup to optimizing your workflow. Pro-tier customers also receive a dedicated account manager for priority support. We’re committed to being responsive and helpful, so you’re never left without an answer.",
  },
];
