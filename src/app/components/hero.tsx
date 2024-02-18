import Image from 'next/image';
import Email_Icon from '../../../public/images/email-icon.svg';
import Instagram_Icon from '../../../public/images/instagram-icon.svg';
import LinkedIn_Icon from '../../../public/images/linkedin-icon.svg';
import GitHub_Icon from '../../../public/images/github-icon.svg';

export default function Hero() {
    return (
        <div className="py-20">
            <h1 className="mt-10 text-center text-white text-5xl font-bold">
                Hi, I'm <span className="font-bold text-[var(--clr-accent)]">Mitch Stowman</span>
            </h1>
            <p className="text-center text-gray-300 m-10 text-xl font-light">UX Design + Frontend Development</p>
            <p className="text-center text-gray-300 m-10 text-xl font-light">I turn your ideas into captivating digital experiences, from concept to launch.</p>
            <div className="flex align-center justify-center">

                <Image
                className="mr-8 hover:cursor-pointer hover:scale-105" 
                    src={Email_Icon}
                    alt="Email Icon"
                    width={40}
                />
                <Image
                className="mr-8 hover:cursor-pointer hover:scale-105"
                    src={Instagram_Icon}
                    alt="Instagram Icon"
                    width={40}
                />

                <a href="https://www.linkedin.com/in/mitchstowman/" target="_blank">
                    <Image
                    className="mr-8 hover:cursor-pointer hover:scale-105"
                        src={LinkedIn_Icon}
                        alt="LinkedIn Icon"
                        width={40}
                />
                </a>

                <Image
                className="mr-8 hover:cursor-pointer hover:scale-105"
                src={GitHub_Icon}
                alt="Github Icon"
                width={40}
                />
            </div>
        </div>
    )
}