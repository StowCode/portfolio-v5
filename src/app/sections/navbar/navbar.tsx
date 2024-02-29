'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/images/StowcodeSolutions.svg';
import LinkIcon from '../../../../public/images/link-icon 1.svg';
import MenuIcon from '../../../../public/bars.svg';
import XIcon from '../../../../public/x.svg';
import "./navbar.css";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function menuToggle() {
      setMenuOpen(prevMenuOpen => !prevMenuOpen);
      console.log(menuOpen)
      console.log('clicked');
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
            <li onClick={menuToggle} className="text-white m-5 px-5">What I Do</li>
            <li onClick={menuToggle} className="text-white m-5 px-5">About Me</li>
            <li onClick={menuToggle} className="text-white m-5 px-5">Featured Work</li>
            <li onClick={menuToggle} className="text-white m-5 px-5">Contact</li>
          </ul>
          : <span className="absolute"></span>}

          <div className="logo flex justify-center">
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