import React, { useEffect, useState } from 'react'
import ProfilesImage from "../assets/profiles.svg"
import WatchIcon from "../assets/watch.svg"
import CreditCardIcon from "../assets/creditCard.svg"

const FloatingPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const SHOW_IDS = ["lastone",
            "whyLeadCRM",
            "howItWorks",
            "review",
            "salesSolution",
            "supportedLeadCRM",
            "professionalsBanner",
        ];
        const HIDE_IDS = ["footer"];

        const isAnyVisible = (ids) =>
            ids.some((id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom > 0;
            });

        let ticking = false;
        const update = () => {
            ticking = false;
            const shouldShow = isAnyVisible(SHOW_IDS) && !isAnyVisible(HIDE_IDS);
            setShow(shouldShow);
        };

        const onScrollOrResize = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize);
        update(); // run once on mount

        return () => {
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, []);


    return (
        <div className={`hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50  shadow-4xl
        transition-all  ease-out
        ${show ? "opacity-100 duration-700 translate-y-0" : "opacity-0 duration-400 translate-y-10"}
      `} >
            <div className="bg-white shadow-xl rounded-xl p-4 flex flex-col items-center relative w-full">

                {/* Content */}
                <div className="flex items-center justify-between px-4 py-2 w-full bg-[#FFEEFE] gap-2">
                    <div>
                        <img src={ProfilesImage} alt="Profile" />
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800">
                        Join with our Thousands of professionals Now!
                    </h2>
                    <button
                        type="button"
                        className="bg-[#B3FC6A] text-lg font-semibold px-6 py-3 rounded-xl "
                    >
                        Get a Free Trial Now!
                    </button>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm ">
                    <div className="flex items-center gap-2">
                        <span className="text-purple-600"><img src={CreditCardIcon} alt="No Credit Card" /></span>
                        <span className='font-semibold'> No Credit Card</span><span className='text-gray-700'>Required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-red"><img src={WatchIcon} alt="Time" /></span>
                        <span className='font-semibold'> 14 Days Free</span><span className='text-gray-700'>Trial</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FloatingPopup