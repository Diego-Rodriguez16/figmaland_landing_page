import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { TbMenuDeep } from "react-icons/tb";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import SocialLinks from "./SocialLinks";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : "bg-transparent"}>
      <nav aria-label="Main navigation">
        <div className="flex-center">
          {/* Left: logo */}
          <a
            href="#"
            aria-label="Home"
            className="lg:hidden inline-flex items-center"
          >
            <img src="/dark-logo.svg" alt="Logo" className="h-18" />
          </a>

          {/* List - only desktop */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ label }) => (
              <li key={label}>
                <a href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: logo */}
        <div className="hidden lg:flex justify-center">
          <a href="#" aria-label="Home" className="inline-flex items-center">
            <img src="/dark-logo.svg" alt="Logo" className="h-18" />
          </a>
        </div>

        {/* Right: social links */}
        <div className="flex justify-end items-center space-x-4 lg:space-x-8">
          {/* Social icons - only desktop */}
          <div className="hidden lg:flex items-center space-x-8 ">
            <SocialLinks color="white" />
          </div>

          {/* Hamburger menu - only mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <TbMenuDeep className="w-8 h-8 text-white cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="bg-[#252B42] w-full sm:w-80 sm:h-auto sm:right-0 sm:left-auto left-0 focus:outline-none text-white">
                <SheetHeader>
                  <SheetTitle className="flex-between w-full">
                    <img src="/dark-logo.svg" alt="Logo" className="h-15" />
                    <SheetClose asChild>
                      <TbMenuDeep className="w-8 h-8 text-white cursor-pointer" />
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>

                <div className="grid gap-4 py-4 mt-5 px-6">
                  {/* Navigation links */}
                  <ul className="flex flex-col gap-4 text-white">
                    {navLinks.map(({ label }) => (
                      <SheetClose asChild key={label}>
                        <li>
                          <a
                            href={`#${label
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-lg hover:text-gray-600 transition block py-2"
                          >
                            {label}
                          </a>
                        </li>
                      </SheetClose>
                    ))}
                  </ul>

                  {/* Social links */}
                  <div className="flex-center gap-6 pt-4 border-t border-gray-200">
                    <SocialLinks color="white" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
