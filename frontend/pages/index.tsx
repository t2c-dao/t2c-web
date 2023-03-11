import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Template from "../components/Template";
import GoodBye from "../components/GoodBye";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#111217] text-white z-0">
      <Head>
        <title>Greenpill Hackathon</title>
        <meta
          name="description"
          content="Hackathon project for Greenpill Hackathon"
        />
      </Head>

      <Header />

      <section id="hero" className="flex w-full justify-center items-center">
        <Hero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section>
        <Template />
      </section>

      <section>
        <GoodBye />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
