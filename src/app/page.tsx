import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <nav>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo"></div>

        <div className="links"></div>
      </nav>


{/*       <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

    </main>
  );
}
