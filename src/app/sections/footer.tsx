'use client'

import Image from 'next/image';
import Logo from '../../../public/images/StowcodeSolutions.svg';
import Email_Icon from '../../../public/images/email-icon.svg';
import Instagram_Icon from '../../../public/images/instagram-icon.svg';
import LinkedIn_Icon from '../../../public/images/linkedin-icon.svg';
import GitHub_Icon from '../../../public/images/github-icon.svg';

export default function Footer() {

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

    return (
        <div className="py-10 bg-[var(--clr-grey)] text-white font-extralight flex flex-col sm:flex-row items-center text-center sm:justify-between sm:px-5 sm:items-start">
            <Image
                onClick={scrollToTop}
                src={Logo}
                alt="Stowcode Solutions Logo"
                width={180}
            />
            <div className="pt-5 sm:pt-0 sm:flex text-sm">
                <ul className="py-3 sm:py-0 border-b-2 border-gray-400 sm:border-b-0 sm:text-left sm:border-r-2 sm:px-3 md:px-10">
                    <li>Frontend Developer</li>
                    <li>UX Designer</li>
                </ul>
                <ul className="py-3 sm:py-0 border-b-2 border-gray-400 sm:border-b-0 sm:text-left sm:border-r-2 sm:px-3 md:px-10">
                    <li className="hover:cursor-pointer" onClick={scrollToTop}>Welcome</li>
                    <li className="hover:cursor-pointer" onClick={() => scrollToSection('about-me')}>About Me</li>
                    <li className="hover:cursor-pointer" onClick={() => scrollToSection('featured-work')}>Featured Work</li>
                    <li className="hover:cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
                <ul className="py-3 sm:py-0 sm:text-left sm:px-3 md:px-10 flex flex-col items-center sm:items-start">
                    <li>Links</li>
                    <li className="flex items-center mt-4 sm:mt-1 pb-10 sm:pb-0">
                        <a href="mailto:mitchellstowman@gmail.com" target="_blank">
                        <Image 
                            src={Email_Icon}
                            alt="email icon"
                            height={15}
                            className="sm:mr-2 mr-5 hover:cursor-pointer w-8 sm:w-4"/>
                        </a>
                        <a href="https://www.instagram.com/mitch.stowman/" target="_blank">
                        <Image 
                            src={Instagram_Icon}
                            alt="email icon"
                            height={15}
                            className="sm:mr-2 mr-5 hover:cursor-pointer w-8 sm:w-4"/>
                        </a>
                        <a href="https://www.linkedin.com/in/mitchstowman/" target="_blank">
                        <Image 
                            src={LinkedIn_Icon}
                            alt="email icon"
                            height={15}
                            className="sm:mr-2 mr-5 hover:cursor-pointer w-8 sm:w-4"/>
                        </a>
                        <a href="https://github.com/StowCode" target="_blank">
                        <Image 
                            src={GitHub_Icon}
                            alt="email icon"
                            height={15}
                            className="mr-0 hover:cursor-pointer w-8 sm:w-4"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}