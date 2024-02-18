import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/StowcodeSolutions.svg';
import LinkIcon from '../../../public/images/link-icon 1.svg';

export default function Navbar() {
    return (
      <nav className="m-5 flex align-center justify-between">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
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

        <div className="links">
            <Image 
                className="relative"
                src={LinkIcon}
                alt="Link Tree Icon"
                width={30}
                priority
            />
        </div>
      </nav>
    )   
}