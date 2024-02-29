import Image, { StaticImageData } from 'next/image';
import Arrow from '../../../public/images/arrow-1.png'

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    image: StaticImageData;
    githubLink: string;
    deploymentLink: string;
}

const Project: React.FC<ProjectProps> = ({title, description, tags, image, githubLink, deploymentLink}) => {
    return (
        <div className="flex flex-col-reverse md:flex-row max-w-screen-l mx-auto md:px-5 mb-20">
            <div className="flex flex-col justify-between text-white m-4">
                <div>
                    <h1 className="text-lg font-semibold">{title}</h1>
                    <div className="flex my-1">
                        {tags.map(tag => (
                            <span key={tag} className="bg-[var(--clr-grey)] px-3 py-1 mr-1 rounded-sm grow text-sm text-center">{tag}</span>
                        ))}
                    </div>
                    <p className="font-light my-3">{description}</p>
                </div>
                
                <div className="flex mt-5 sm:mb-0 mb-5 sm:justify-normal justify-center">
                    <a href={githubLink} target="blank">
                        <button className="text-[var(--clr-accent)] text-lg items-center font-semibold flex px-5 py-1 border rounded border-white sm:mr-5 mr-10">GitHub</button>
                    </a>
                    
                    <a href={deploymentLink} target="blank">
                    <button className="border-b-[1px] flex items-center h-full py-1 text-lg">
                        
                        View Project
                        <Image
                            className="ml-3"
                            src={Arrow}
                            alt="Arrow Icon"
                            height={10}
                        />
                    </button>
                    </a>

                </div>
            </div>
            <Image
                className="m-5 md:w-5/12 md:min-w-96 w-11/12 shrink mx-auto shrink"
                src={image}
                alt="Project Preview Image"
            />
        </div>
    )
}

export default Project;