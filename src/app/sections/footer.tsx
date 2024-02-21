import Image from 'next/image';
import Logo from '../../../public/images/StowcodeSolutions.svg';

export default function Footer() {
    return (
        <div className="relative mt-20 py-10 px-5 w-full flex items-start justify-between bg-[var(--clr-grey)] text-gray-400 text-sm">
            <Image 
                src={Logo}
                alt="Stowcode Solutions Logo"
                width={180}
            />
            <div className="flex mr-20 pr-20">
                <ul className="border-r-2 border-gray-400 px-10">
                    <li>Frontend Developer</li>
                    <li>UX Designer</li>
                </ul>
                <ul className="border-r-2 border-gray-400 px-10">
                    <li>Welcome</li>
                    <li>About Me</li>
                    <li>Featured Work</li>
                    <li>Contact</li>
                </ul>
                <ul className="px-10">
                    <li>Links</li>
                    <li>
                        Link Row
                    </li>
                </ul>
            </div>
        </div>
    )
}