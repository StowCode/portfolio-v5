import Image from 'next/image';
import Download from '../../../public/images/download-icon.svg';

export default function AboutMe() {
    return (
        <section 
            className="max-w-screen-xl mx-auto mt-10"
            style={{
                background:''
            }}
            >
            <h2 className="m-5 text-left text-white text-3xl font-bold">
                About <span className="font-bold text-[var(--clr-accent)]">Me</span>
            </h2>

            <article className="m-5 text-white font-light">
                <p className="my-4">I'm a Frontend Developer and UX designer, blending my background in visual design with a passion for intuitive and engaging user experiences. Formerly a music educator, I've transitioned into the world of software development, drawing upon my years of experience in delivering information effectively.</p>
                <p className="my-4">My journey has equipped me with the skills to create beautiful and effective products. Whether it's designing highly responsive websites that drive conversion rates or crafting immersive 3D web experiences that captivate audiences, I thrive on the process of creation and building.</p>
                <p className="my-4">As a team player, I pride myself on adaptability and overcoming challenges collaboratively. I'm eager to bring my expertise, ideas, and energy to your project, ensuring its success and impact.</p>
            </article>
            
            <button className="text-[var(--clr-accent)] text-lg items-center font-semibold flex my-10 mx-5 px-5 py-1 border rounded border-[var(--clr-accent)]">
                Resume
                <Image
                    className="ml-3"
                    src={Download}
                    alt="Download Button for Resume"
                    height={20}
                />
            </button>
        </section>
    )
}