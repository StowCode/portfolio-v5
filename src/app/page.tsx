import Navbar from './components/navbar';
import Hero from './components/hero';
import WhatIDo from './components/whatIdo';
import AboutMe from './components/aboutme';
import FeaturedWork from './components/featuredwork';
import ContactMe from './components/contactme';
import Footer from './components/footer';

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
