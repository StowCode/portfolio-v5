import Navbar from './navbar/navbar';
import Hero from './sections/hero';
import WhatIDo from './sections/whatIdo';
import AboutMe from './sections/aboutme';
import FeaturedWork from './sections/featuredwork';
import ContactMe from './sections/contactme';
import Footer from './sections/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIDo />
      <AboutMe />
      <FeaturedWork />
      <ContactMe />
      <Footer />
    </main>
  );
}
