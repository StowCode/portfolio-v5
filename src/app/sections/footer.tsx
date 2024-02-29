import Image from 'next/image';
import Logo from '../../../public/images/StowcodeSolutions.svg';
import Email_Icon from '../../../public/images/email-icon.svg';
import Instagram_Icon from '../../../public/images/instagram-icon.svg';
import LinkedIn_Icon from '../../../public/images/linkedin-icon.svg';
import GitHub_Icon from '../../../public/images/github-icon.svg';

export default function Footer() {
    return (
        <div className="py-10 bg-[var(--clr-grey)] text-white font-extralight flex flex-col sm:flex-row items-center text-center sm:justify-between sm:px-5 sm:items-start">
            <Image 
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
                    <li>Welcome</li>
                    <li>About Me</li>
                    <li>Featured Work</li>
                    <li>Contact</li>
                </ul>
                <ul className="py-3 sm:py-0 sm:text-left sm:px-3 md:px-10">
                    <li>Links</li>
                    <li className="flex items-center mt-1">
                        <Image 
                            src={Email_Icon}
                            alt="email icon"
                            height={15}
                            className="mr-2 hover:cursor-pointer"/>
                        <Image 
                            src={Instagram_Icon}
                            alt="email icon"
                            height={15}
                            className="mr-2 hover:cursor-pointer"/>
                        <Image 
                            src={LinkedIn_Icon}
                            alt="email icon"
                            height={15}
                            className="mr-2 hover:cursor-pointer"/>
                        <Image 
                            src={GitHub_Icon}
                            alt="email icon"
                            height={15}
                            className="hover:cursor-pointer"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}