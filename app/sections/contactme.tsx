'use client'

import { useState } from 'react';

export default function ContactMe() {
    return (
        <div id="contact" className="flex flex-col sm:flex-row sm:py-20 py-10 max-w-screen-xl mx-auto sm:mt-10 mt-5">
            <h2 className="ml-5 mr-20 text-left text-white text-3xl font-bold shrink-0">
                Contact <span className="font-bold text-[var(--clr-accent)]">Me</span>
            </h2>

            <form action="https://formsubmit.co/6e5f5e258bfbdab8c20dd68c8904d89f" method="POST" className="flex flex-col sm:w-full w-11/12 max-w-screen-sm mx-5">
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_next" value="https://stowcode.tech"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="Name" name="Name" className="mb-5 text-white bg-transparent border-b-2 border-[var(--clr-accent)] py-2" placeholder="Name"></input>
                <input type="Email" name="Email" className="mb-5 text-white bg-transparent border-b-2 border-[var(--clr-accent)] py-2" placeholder="Email"></input>
                <input className="bg-transparent pb-10 border-b-2 border-[var(--clr-accent)] text-white" placeholder="Message"></input>
                <button className="w-32 font-bold text-[var(--clr-dark)] bg-[--clr-accent] rounded-sm mt-5 p-1 hover:cursor-pointer" type="submit">Send</button>
            </form>
        </div>
    )
}