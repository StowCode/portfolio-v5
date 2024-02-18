import Image from 'next/image';
import Arc from '../../../public/images/arc-preview.png';
import Arrow from '../../../public/images/arrow-1.png'

export default function Project() {
    return (
        <div className="flex">
            <div className="text-white m-4">
                <h1 className="text-lg font-semibold">Project Title Here</h1>
                <div className="flex my-1">
                    <span className="bg-[var(--clr-grey)] px-3 mr-1 rounded-sm grow">HTML/SCSS</span>
                    <span className="bg-[var(--clr-grey)] px-3 mr-1 rounded-sm grow">JavaScript</span>
                    <span className="bg-[var(--clr-grey)] px-3 rounded-sm grow">React</span>
                </div>
                <p className="font-light my-5">Project Description Here.</p>
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