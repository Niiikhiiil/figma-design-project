import React, { useEffect, useState } from 'react'
import mainLogo from "../assets/logo.svg"
import loginLogo from "../assets/login.svg"
import DownArrowIcon from "../assets/downArrow.svg"
// import menuLogo from "../assets/menu.svg"
// import closeLogo from "../assets/close.svg"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    // const scrollToSection = (sectionId) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //         setIsMenuOpen(false);
    //     }
    // };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md ' : 'bg-transparent'}`}
            style={{
                boxShadow: isScrolled && "0px 0px 10px 0px rgba(175.0006793478261, 198.32656822276704, 255, 0.5)"
            }}
            id="header"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
                <div className="flex justify-between items-center py-2">

                    {/* Logo  */}
                    <div className="text-2xl cursor-pointer">
                        <img src={mainLogo} alt="LeadCRM" title='LeadCRM' className='w-2/3 h-2/3 md:w-full md:h-full' />
                    </div>

                    {/* tabs  */}
                    <nav className="hidden lg:flex space-x-8">
                        {['Product', 'Pricing', 'Resource', 'Company'].map((item) => (
                            <button
                                key={item}
                                // onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-main hover:text-hover-main transition-colors duration-200 font-medium cursor-pointer flex items-center justify-center gap-1"
                            >
                                {item}
                                <span>
                                    <img src={DownArrowIcon} alt="Down" className='w-[17px] h-[11px]' />
                                </span>
                            </button>
                        ))}
                    </nav>

                    {/* Login and Get Your free account button  */}
                    <div className="flex items-center space-x-4">
                        <button className="hidden md:flex group relative h-13 w-56 overflow-hidden rounded-lg bg-main cursor-pointer before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0 hover:before:rounded-t-lg before:bg-hover-main before:transition-all before:duration-500 hover:before:h-full">
                            {/* Default text */}
                            <span className="absolute inset-0 flex items-center justify-center text-white transition-transform duration-300  group-hover:-translate-y-full group-hover:delay-200">
                                Get your free account
                            </span>

                            {/* Hover text */}
                            <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full transition-transform duration-300  group-hover:translate-y-0 group-hover:delay-200 z-10">
                                Get your free account
                            </span>
                        </button>
                        <button
                            className="flex items-center justify-between gap-2 space-x-2 bg-transparent border-2 border-main text-main hover:bg-button-hover-main px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            <img src={loginLogo} alt="login" width={17} height={17} />
                            Login
                        </button>
                    </div>

                    {/* Menu bar button  */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="ml-2 lg:hidden text-white cursor-pointer"
                    >
                        <svg className="w-10 h-10 text-[#08B4DA] border-[1px] border-[#08B4DA] text-xl hover:bg-[#08B4DA] hover:text-white rounded" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                        </svg>
                    </button>
                </div>

                {/* Mobile and Tab view  */}
                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`block  lg:hidden fixed top-0 left-0 h-[100vh] w-full bg-[#47474794] bg-opacity-25 shadow-md transform transition-transform duration-300 z-39 ${isMenuOpen ? "duration-300 translate-x-0" : "duration-800 -translate-x-full"
                        }`}
                />

                {/* Mobile and Tab view  */}
                <div
                    className={`block lg:hidden fixed top-0 left-0 h-[100vh] w-72 bg-white shadow-md transform transition-transform  z-40 ${isMenuOpen ? "duration-800 translate-x-0" : "duration-300 -translate-x-full"
                        }`}
                >
                    <div className="flex flex-col p-4 space-y-6">
                        <div className="text-2xl  flex items-center justify-between">

                            <img src={mainLogo} alt="LeadCRM" title='LeadCRM' width={120} height={42} />
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="self-end border rounded-md px-2 py-1 cursor-pointer text-sm"
                            >
                                ✕
                            </button>
                        </div>
                        <a href="#" className="font-semibold flex items-center justify-between gap-1">Product  <span>
                            <img src={DownArrowIcon} alt="Down" className='w-[17px] h-[11px]' />
                        </span></a>
                        <a href="#" className="font-semibold flex items-center justify-between gap-1">Pricing  <span>
                            <img src={DownArrowIcon} alt="Down" className='w-[17px] h-[11px]' />
                        </span></a>
                        <a href="#" className="font-semibold flex items-center justify-between gap-1">Resources <span>
                            <img src={DownArrowIcon} alt="Down" className='w-[17px] h-[11px]' />
                        </span></a>
                        <a href="#" className="font-semibold flex items-center justify-between gap-1">Company <span>
                            <img src={DownArrowIcon} alt="Down" className='w-[17px] h-[11px]' />
                        </span></a>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Header