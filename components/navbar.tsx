import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/StowcodeSolutions.svg';

export default function Navbar() {
    return (
        <nav 
        className="m-5"
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
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

        <div className="links"></div>
      </nav>
    )   
}