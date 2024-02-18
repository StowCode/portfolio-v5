import Project from '../components/project';

export default function FeaturedWork() {
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <h2 className="m-5 text-left text-white text-3xl font-bold">
                Featured <span className="font-bold text-[var(--clr-accent)]">Work</span>
            </h2>

            <Project />
        </div>
    )
}