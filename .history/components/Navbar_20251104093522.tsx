import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/Constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav className={`w-full h-[10vh] z-[1000] transition-all duration-300 fixed overflow-x-hidden ${navBg ? 'bg-black' : 'bg-black/60'}`}>
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto px-4">
        <div className="flex-shrink-0">
          <Image src="/logo-landscape.png" alt="logo" width={140} height={60} priority /> 
        </div>

        {/* Navlink */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav_link text-white">{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Burger */}
        <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden flex-shrink-0" />
      </div>
    </nav>
  );
};

export default Navbar;