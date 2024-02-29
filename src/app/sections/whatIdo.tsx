export default function WhatIDo() {
    return (
        <div id="what-i-do" className="sm:max-w-screen-xl mx-auto my-10">
            <h2 className="m-5 text-left text-white text-3xl font-bold">
                What <span className="font-bold text-[var(--clr-accent)]">I Do</span>
            </h2>

            <div className="flex overflow-scroll no-scrollbar mx-5">
                <div className="bg-[var(--clr-grey)] w-10/12 shrink-0 mx-2 p-5 rounded-lg sm:shrink">
                    <h3 className="text-[var(--clr-accent)] font-semibold">Frontend Development</h3>
                    <ul className="text-white font-extralight list-disc mx-5">
                        <li className="my-2">Pixel-Perfect, Responsive Development</li>
                        <li className="my-2">Custom Development Solutions</li>
                        <li className="my-2">Codebase Maintenance and Support</li>
                        <li className="my-2">Performance Optimization</li>
                    </ul>
                </div>
                <div className="bg-[var(--clr-grey)] w-10/12 shrink-0 mx-2 p-5 rounded-lg sm:shrink">
                    <h3 className="text-[var(--clr-accent)] font-semibold">UX Design</h3>
                    <ul className="text-white font-extralight list-disc mx-5">
                        <li className="my-2">User Research and Analysis</li>
                        <li className="my-2">Information Architecture and Wireframing</li>
                        <li className="my-2">Interaction Design and Prototyping</li>
                        <li className="my-2">Visual Design and Branding</li>
                        <li className="my-2">Usability Evaluation and Optimization</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}