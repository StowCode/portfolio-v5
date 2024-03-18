import Project from '../components/project';
import Arch from '../../../public/images/arch-screenshot.png';
import Space from '../../../public/images/Space-screenshot.jpg';
import Bitcoin from '../../../public/images/bitcoin-alarm.jpg';
import Sneakers from '../../../public/images/sneakers.jpg';

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
                githubLink="https://github.com/StowCode/Arch-Studio"
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
                title="Sneakers"
                description="This demo e-commerce page allows the user to add items to their cart as well as modify or delete those items.  Additionally, image toggling and an image shadowbox were created for an enhanced user experience."
                tags={["HTML", "CSS", "JavaScript"]}
                image={Sneakers}
                githubLink="https://github.com/StowCode"
                deploymentLink="https://sneakers-ecommerce-5kymjeht8-stowcode.vercel.app/"
            />
            <Project 
                title="Gilfoyles Bitcoin Alarm"
                description="Crafted with React and powered by the CoinGecko API, this application (utilizing a trendy neumorphism design) offers users the ability to create personalized price alerts for Bitcoin. Fans of 'Silicon Valley' will enjoy this more than most."
                tags={["HTML", "CSS", "React"]}
                image={Bitcoin}
                githubLink="https://github.com/StowCode/crypto-tracker"
                deploymentLink="https://gilfoyles-bitcoin-alarm-kwk8q7vj2-stowcode.vercel.app/"
            />
        </div>
    )
}