import React, { useEffect, useState } from 'react'
import mainLogo from "../assets/logo.svg"
import loginLogo from "../assets/login.svg"
import menuLogo from "../assets/menu.svg"
import closeLogo from "../assets/close.svg"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

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
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
                <div className="flex justify-between items-center py-3">
                    <div className="text-2xl cursor-pointer">
                        <img src={mainLogo} alt="LeadCRM" title='LeadCRM' />
                    </div>
                    <nav className="hidden lg:flex space-x-8">
                        {['Product', 'Pricing', 'Resource', 'Company'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-main hover:text-hover-main transition-colors duration-200 font-medium cursor-pointer"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

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

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white cursor-pointer"
                    >
                        {isMenuOpen ? <img src={closeLogo} alt='close' width={24} height={24} /> : <img src={menuLogo} alt='menu' width={24} height={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden bg-gray-500 backdrop-blur-md rounded-lg mt-2 py-4">
                        <nav className="flex flex-col space-y-2 px-4">
                            {['Product', 'Pricing', 'Resource', 'Company'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-left py-2 cursor-pointer"
                                >
                                    {item}
                                </button>
                            ))}

                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header