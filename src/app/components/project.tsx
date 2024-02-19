import Image from 'next/image';
import Arc from '../../../public/images/arc-preview.png';
import Arrow from '../../../public/images/arrow-1.png'

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
}

const Project: React.FC<ProjectProps> = ({title, description, tags}) => {
    return (
        <div className="flex max-w-screen-xl mx-auto m-10">
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
                
                <div className="flex mt-5">
                    <button className="text-[var(--clr-accent)] text-lg items-center font-semibold flex px-5 py-1 border rounded border-white mr-5">GitHub</button>
                    <button className="border-b-[1px] flex items-center h-full py-1 text-lg">
                        View Project
                        <Image
                            className="ml-3"
                            src={Arrow}
                            alt="Arrow Icon"
                            height={10}
                        />
                    </button>
                </div>
            </div>
            <Image
                className="m-5"
                src={Arc}
                alt="Project Preview Image for Arc Studios"
            />
        </div>
    )
}

export default Project;