import React from "react";
import FaceBookIcon from "../assets/facebook.svg";
import XIcon from "../assets/x.svg";
import LinkedInIcon from "../assets/linkedIn.svg";
import InstagramIcon from "../assets/instagram.svg";
import MailIcon from "../assets/mail.svg";
import PhoneIcon from "../assets/phone.svg";
import HelpIcon from "../assets/help.svg";
import LogoIcon from "../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-[#01B2D838] mt-10" id="footer">
            <div className="container mx-auto px-7 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Logo & Description */}
                <div>
                    <div className="text-2xl font-bold text-blue-900 mb-2">
                        <img src={LogoIcon} alt="logo" />
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                        LeadCRM is LinkedIn integration tool for your CRM.
                    </p>
                    <div className="flex items-center gap-3">
                        <img src={FaceBookIcon} alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                        <img src={XIcon} alt="X" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                        <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                        <img src={InstagramIcon} alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                    </div>
                </div>

                {/* Integrations */}
                <div>
                    <h2 className="font-semibold text-lg text-[#090F4E] mb-3 ">Integrations</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>HubSpot</li>
                        <li>Salesforce</li>
                        <li>
                            Pipedrive <span className="text-xs py-1 px-3 ml-1 bg-gradient-to-r from-[#D8FFDD] to-[#BDFFC6] border-[1px] border-white rounded-full ">Coming Soon</span>
                        </li>
                        <li>
                            Insightly <span className="text-xs py-1 px-3 ml-1 bg-gradient-to-r from-[#D8FFDD] to-[#BDFFC6] border-[1px] border-white rounded-full ">Coming Soon</span>
                        </li>
                    </ul>
                </div>

                {/* Alternative */}
                <div>
                    <h2 className="font-semibold text-lg text-[#090F4E] mb-3">Alternative</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>Surfe VS LeadCRM</li>
                        <li>Linkmatch Alternative</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h2 className="font-semibold text-lg text-[#090F4E] mb-3">Legal</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h2 className="font-semibold text-lg text-[#090F4E] mb-3">Contact Us</h2>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        <li className="flex items-center gap-2">
                            <img src={MailIcon} alt="mail" className="w-5 h-5" />
                            support@leadcrm.io
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={PhoneIcon} alt="phone" className="w-5 h-5" />
                            +1 231-538-7466
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={HelpIcon} alt="help" className="w-5 h-5" />
                            Help Center
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="w-full">
                <div className="max-w-[90vw] mx-auto flex flex-col items-center text-gray-600 text-sm px-4 py-6">

                    {/* Disclaimer */}
                    <p className="text-center max-w-3xl">
                        Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn™ logos and trademarks
                        displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS.
                        Your use of LeadCRM is at your own risk.
                    </p>

                    {/* Divider */}
                    <div className="w-full border-t border-gray-400 mt-2" />

                    {/* Copyright */}
                    <p className="mt-4 text-center w-full">
                        © {new Date().getFullYear()} LeadCRM (Created by Nikhil Muliya). All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
