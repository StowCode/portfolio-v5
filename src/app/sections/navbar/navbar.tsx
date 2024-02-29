'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/images/StowcodeSolutions.svg';
import LinkIcon from '../../../../public/images/link-icon 1.svg';
import MenuIcon from '../../../../public/bars.svg';
import XIcon from '../../../../public/x.svg';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function menuToggle() {
      setMenuOpen(prevMenuOpen => !prevMenuOpen);
      console.log(menuOpen)
      console.log('clicked');
    }

    function scrollToSection(sectionId: string) {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      menuToggle(); // Close the mobile menu after clicking a link
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return (
      <nav className="p-5 fixed w-full bg-[var(--clr-dark)] mx-auto">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          { menuOpen ?
          <Image 
              className="hover:cursor-pointer z-50"
              src={MenuIcon}
              alt="Menu Icon"
              height={30}
              onClick={menuToggle}
            />
            :
          <Image 
            className="hover:cursor-pointer z-50 stroke-white"
            src={XIcon}
            alt="X Icon"
            height={30}
            onClick={menuToggle}
          />
          }

          { !menuOpen ? 
          <ul id="mobile-navbar" className="absolute left-0 top-0 bg-[var(--clr-grey)] z-40 h-screen pt-20">
            <li onClick={() => scrollToSection('what-i-do')} className="text-white m-5 px-5 hover:cursor-pointer">What I Do</li>
            <li onClick={() => scrollToSection('about-me')} className="text-white m-5 px-5 hover:cursor-pointer">About Me</li>
            <li onClick={() => scrollToSection('featured-work')} className="text-white m-5 px-5 hover:cursor-pointer">Featured Work</li>
            <li onClick={() => scrollToSection('contact')} className="text-white m-5 px-5 hover:cursor-pointer">Contact</li>
          </ul>
          : <span className="absolute"></span>}

          <div onClick={scrollToTop} className="logo flex justify-center hover:cursor-pointer">
            <Image 
              className="w-40 sm:w-64"
              src={Logo}
              alt="Stowcode Solutions Logo"
              width={240}
              priority
            />
          </div>

          <div className="links hover:cursor-pointer">
              <Image 
                  className="relative"
                  src={LinkIcon}
                  alt="Link Tree Icon"
                  width={30}
                  priority
              />
          </div>
        </div>
      </nav>
    )   
}