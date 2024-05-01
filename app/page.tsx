import Head from 'next/head';
import Navbar from './navbar/navbar';
import Hero from './sections/hero';
import WhatIDo from './sections/whatIdo';
import AboutMe from './sections/aboutme';
import FeaturedWork from './sections/featuredwork';
import ContactMe from './sections/contactme';
import Footer from './sections/footer';
import MetaImage from '../public/images/ogimage.jpg';

export default function Home() {
  return (
    <main>
      <Head>
        <meta property="og:image" content="../public/images/ogimage.jpg" />
      </Head>

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
