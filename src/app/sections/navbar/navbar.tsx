'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/images/StowcodeSolutions.svg';
import LinkIcon from '../../../../public/images/link-icon 1.svg';
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
          <div onClick={menuToggle} className="hamburger flex flex-col hover:cursor-pointer">
            <span className="block h-1 w-7 bg-white rounded-full mb-1"></span>
            <span className="block h-1 w-6 bg-white rounded-full mb-1"></span>
            <span className="block h-1 w-7 bg-white rounded-full"></span>
          </div>

          { menuOpen ? 
          <ul id="mobile-navbar" className="">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
          : <div></div>}

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