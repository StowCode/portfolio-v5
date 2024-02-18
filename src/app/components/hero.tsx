import Link from 'next/link';
import Image from 'next/image';
import Email from '../../../public/images/email-icon.svg';

export default function Hero() {
    return (
        <div>
            <h1 className="mt-10 text-center text-white text-5xl font-bold">Hi, I'm Mitch Stowman</h1>
            <p className="text-center text-gray-300 m-10 text-xl font-light">UX Design + Frontend Development</p>
            <p>I turn your ideas into captivating digital experiences, from concept to launch.</p>
            <div>
                <Image 
                    src={Email}
                    alt="Email Icon"
                />
            </div>
        </div>
    )
}