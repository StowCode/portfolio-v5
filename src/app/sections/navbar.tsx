import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/StowcodeSolutions.svg';
import LinkIcon from '../../../public/images/link-icon 1.svg';

export default function Navbar() {
    return (
      <nav className="p-5 fixed w-full bg-[var(--clr-dark)] mx-auto">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="hamburger flex flex-col hover:cursor-pointer">
            <span className="block h-1 w-7 bg-white rounded-full mb-1"></span>
            <span className="block h-1 w-6 bg-white rounded-full mb-1"></span>
            <span className="block h-1 w-7 bg-white rounded-full"></span>
          </div>

          <div className="logo">
            <Image 
              className="relative"
              src={Logo}
              alt="Stowcode Solutions Logo"
              width={250}
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