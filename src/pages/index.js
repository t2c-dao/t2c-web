import Head from "next/head";

import Header from "@/components/Utils/Header";
import Hero from "@/components/Home/Hero";
// import AboutUs from "@/components/Home/AboutUs";
// import Template from "@/components/Utils/Template"
import GoodBye from "@/components/Home/GoodBye";
import Footer from "@/components/Utils/Footer";
import AboutT2C from "@/components/Home/AboutT2C";
import Features from "@/components/Home/Features";

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

      <section id="aboutt2c">
        <AboutT2C  />
      </section>

      {/* <section id="aboutus">
        <AboutUs />
      </section> */}

      <section id='features'>
        <Features />
      </section>

      <section id="goodbye">
        <GoodBye />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
