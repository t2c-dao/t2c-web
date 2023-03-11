import Head from "next/head";

import Header from "@/components/Utils/Header";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import Template from "@/components/Utils/Template"
import GoodBye from "@/components/Home/GoodBye";
import Footer from "@/components/Utils/Footer";

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
