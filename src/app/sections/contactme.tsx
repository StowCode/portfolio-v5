export default function ContactMe() {
    return (
        <div className="flex flex-col sm:flex-row sm:py-20 py-10 max-w-screen-xl mx-auto sm:mt-10 mt-5">
            <h2 className="ml-5 mr-20 text-left text-white text-3xl font-bold shrink-0">
                Contact <span className="font-bold text-[var(--clr-accent)]">Me</span>
            </h2>

            <form className="flex flex-col sm:w-full w-11/12 max-w-screen-sm mx-5">
                <input className="mb-5 text-white bg-transparent border-b-2 border-[var(--clr-accent)] py-2" placeholder="Name"></input>
                <input className="mb-5 text-white bg-transparent border-b-2 border-[var(--clr-accent)] py-2" placeholder="Email"></input>
                <textarea className="bg-transparent pb-10 border-b-2 border-[var(--clr-accent)]" placeholder="Message"></textarea>
                <button className="w-32 font-bold text-[var(--clr-dark)] bg-[--clr-accent] rounded-sm mt-5 p-1 hover:cursor-pointer" type="submit">Send</button>
            </form>
        </div>
    )
}