import Project from '../components/project';
import Arch from '../../../public/images/arch-screenshot.png';
import Space from '../../../public/images/Space-screenshot.jpg';
import Bitcoin from '../../../public/images/bitcoin-alarm.jpg';

export default function FeaturedWork() {
    return (
        <div id="featured-work" className="max-w-screen-xl mx-auto mt-20 mb-5">
            <h2 className="m-5 text-left text-white text-3xl font-bold">
                Featured <span className="font-bold text-[var(--clr-accent)]">Work</span>
            </h2>

            <Project 
                title="Arch Studios"
                description="This sleek and contemporary design accentuates the stunning imagery provided by the client, integrating the Leaflet API to deliver an engaging interactive map feature."
                tags={["SCSS", "React", "JavaScript"]}
                image={Arch}
                githubLink="https://github.com/StowCode"
                deploymentLink="https://arch-studio-riheuypvs-stowcode.vercel.app/"
            />
            <Project 
                title="Space Tourism"
                description="Space Tourism captivates users with its sleek design, subtle animations, and dynamic content. Custom CSS utility classes and accessible navigation further enhance the experience, ensuring seamless exploration for all visitors."
                tags={["HTML", "CSS", "JavaScript"]}
                image={Space}
                githubLink="https://github.com/StowCode"
                deploymentLink="https://arch-studio-riheuypvs-stowcode.vercel.app/"
            />
            <Project 
                title="Gilfoyles Bitcoin Alarm"
                description="Crafted with React and powered by the CoinGecko API, this application (utilizing a trendy neumorphism design) offers users the ability to create personalized price alerts for Bitcoin. Fans of 'Silicon Valley' will enjoy this more than most."
                tags={["HTML", "CSS", "React"]}
                image={Bitcoin}
                githubLink="https://github.com/StowCode"
                deploymentLink="https://arch-studio-riheuypvs-stowcode.vercel.app/"
            />
        </div>
    )
}