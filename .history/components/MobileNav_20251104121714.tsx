import React from 'react';
import Link from "next/link";
import { navLinks } from "@/constant/Constant";
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav: boolean;
    closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div>
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-90 w-full h-screen`}>
                <div className={`text-white fixed ${navOpen} flex flex-col items-center justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#25725f] space-y-5 z-[10000]`}>
                    
                    {/* Navigation Links */}
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id}>
                            <p className="nav_link text-white text-[20px] sm:text-[30px]">
                                {link.label}
                            </p>
                        </Link>
                    ))}

                    {/* Close Button */}
                    <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
