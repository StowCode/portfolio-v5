'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/StowcodeSolutions.svg';
import LinkIcon from '../../public/images/link-icon 1.svg';
import MenuIcon from '../../public/bars.svg';
import XIcon from '../../public/x.svg';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [linkOpen, setLinkOpen] = useState(false);

    function menuToggle() {
      setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }

    function LinkToggle() {
      setLinkOpen(prevLinkOpen => !prevLinkOpen);
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
          { !menuOpen ?
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
            <ul id="mobile-navbar" className="absolute left-0 top-0 bg-[var(--clr-grey)] z-40 h-screen pt-20 w-64 transition-all duration-300 ease-in-out transform -translate-x-full">
              <li onClick={() => scrollToSection('what-i-do')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">What I Do</li>
              <li onClick={() => scrollToSection('about-me')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">About Me</li>
              <li onClick={() => scrollToSection('featured-work')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">Featured Work</li>
              <li onClick={() => scrollToSection('contact')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">Contact</li>
            </ul>
            : 
            <ul id="mobile-navbar" className="absolute left-0 top-0 bg-[var(--clr-grey)] z-40 h-screen pt-20 w-64 transition-all duration-300 ease-in-out transform translate-x-0">
              <li onClick={() => scrollToSection('what-i-do')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">What I Do</li>
              <li onClick={() => scrollToSection('about-me')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">About Me</li>
              <li onClick={() => scrollToSection('featured-work')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">Featured Work</li>
              <li onClick={() => scrollToSection('contact')} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]">Contact</li>
            </ul>
          }

          <div onClick={scrollToTop} className="logo flex justify-center hover:cursor-pointer">
            <Image 
              className="w-40 sm:w-64"
              src={Logo}
              alt="Stowcode Solutions Logo"
              width={240}
              priority
            />
          </div>

          { !linkOpen ?
          <Image 
              className="relative z-50 hover:cursor-pointer"
              src={LinkIcon}
              alt="Link Tree Icon"
              width={30}
              priority
              onClick={LinkToggle}
          />
          :
          <Image 
            className="hover:cursor-pointer z-50 stroke-white"
            src={XIcon}
            alt="X Icon"
            height={30}
            onClick={LinkToggle}
          />
          }

        { !linkOpen ? 
            <ul className="absolute right-0 top-0 bg-[var(--clr-grey)] z-40 h-screen pt-20 w-64 transition-all duration-300 ease-in-out transform translate-x-full text-right">
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]"><a href="mailto:mitchellstowman@gmail.com" target="_blank">Email</a></li>
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]"><a href="https://www.linkedin.com/in/mitchstowman/" target="_blank">LinkedIn</a></li>
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]"><a href="https://github.com/StowCode" target="_blank">GitHub</a></li>
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]"><a href="https://www.instagram.com/mitch.stowman/" target="_blank">Instagram</a></li>
            </ul>
            : 
            <ul className="absolute right-0 top-0 bg-[var(--clr-grey)] z-40 h-screen pt-20 w-64 transition-all duration-300 ease-in-out transform translate-x-0 text-right">
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointe hover:text-[var(--clr-accent)]"><a href="mailto:mitchellstowman@gmail.com" target="blank">Email</a></li>
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]"><a href="https://www.linkedin.com/in/mitchstowman/" target="_blank">LinkedIn</a></li>
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]"><a href="https://github.com/StowCode" target="_blank">GitHub</a></li>
              <li onClick={LinkToggle} className="text-white m-5 px-5 hover:cursor-pointer hover:text-[var(--clr-accent)]"><a href="https://www.instagram.com/mitch.stowman/" target="_blank">Instagram</a></li>
            </ul>
          }
        
        </div>
      </nav>
    )   
}