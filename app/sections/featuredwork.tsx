import Project from '../components/project';
import Rastellis from '../../public/images/rastellis-preview.jpg';
import Arch from '../../public/images/arch-screenshot.png';
import Space from '../../public/images/Space-screenshot.jpg';
import Bitcoin from '../../public/images/bitcoin-alarm.jpg';
import Sneakers from '../../public/images/sneakers.jpg';
import YourProject from '../../public/images/your-project-preview.png';

export default function FeaturedWork() {
    
    return (
        <div id="featured-work" className="max-w-screen-xl mx-auto mt-20 mb-5">
            <h2 className="m-5 text-left text-white text-3xl font-bold">
                Featured <span className="font-bold text-[var(--clr-accent)]">Work</span>
            </h2>
            <Project 
                title="Rastellis.com"
                description="This redesign for Rastellis.com seamlessly blends established brand standards with modern web design, ensuring a simplified user journey and minimalist aesthetic. It embodies Rastelli's commitment to quality and innovation in every digital interaction."
                tags={["Liquid", "JavaScript", "CSS"]}
                image={Rastellis}
                githubLink="https://github.com/StowCode"
                deploymentLink="https://rastellis.com"
            />
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
                deploymentLink="https://space-tourism-pied-psi.vercel.app/"
            />
            <Project 
                title="Gilfoyle's Bitcoin Alarm"
                description="Sometimes it's okay to build something fun... Powered by the CoinGecko API, this application (utilizing a trendy neumorphism design) offers users the ability to create personalized price alerts for Bitcoin. Fans of 'Silicon Valley' will enjoy this more than most."
                tags={["HTML", "CSS", 'React']}
                image={Bitcoin}
                githubLink="https://github.com/StowCode/crypto-tracker"
                deploymentLink="https://gilfoyles-bitcoin-alarm-kwk8q7vj2-stowcode.vercel.app/"
            />
            <Project 
                title="Your Website"
                description="Is your website in need of a facelift? Don't have a website? Elevate your online presence with intentional design, and custom development solutions. From maintenance to performance optimization, we'll work together to create a seamless user experience that highlights your brand. Get in touch below!"
                tags={["Design", "Development", 'Support']}
                image={YourProject}
                githubLink=""
                deploymentLink=""
            />
        </div>
    )
}