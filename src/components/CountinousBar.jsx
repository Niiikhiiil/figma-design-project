import React from 'react';
import { motion } from "framer-motion"
import { ContinousBarData } from '../utils/data';


const CountinousBar = () => {
    return (<>
        {/* Continous bar */}
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
                            {ContinousBarData.map(({ src, alt }, index) => {
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

        {/* bottom line  */}
        <hr className="border-t border-gray-200 w-full" />

    </>
    )
};

export default CountinousBar;
