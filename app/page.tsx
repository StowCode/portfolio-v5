import Head from 'next/head';
import Navbar from './navbar/navbar';
import Hero from './sections/hero';
import WhatIDo from './sections/whatIdo';
import AboutMe from './sections/aboutme';
import FeaturedWork from './sections/featuredwork';
import ContactMe from './sections/contactme';
import Footer from './sections/footer';
import MetaImage from '../app/opengraph-image.jpg';

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="image" property="og:image" content="https://www.flickr.com/photos/194765725@N05/53692433079/in/dateposted-public/" />
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
