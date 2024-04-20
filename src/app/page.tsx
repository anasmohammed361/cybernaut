import AboutUs from "./_components/AboutUs";
import CardSection from "./_components/CardSection";
import Collobarators from "./_components/Collaborators";
import Connect from "./_components/Connect";
import Footer from "./_components/Footer";

import { Hero } from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Placement from "./_components/Placement";
import Events from "./_components/Events";
import Programs from "./_components/Programs";
import Testimonials from "./_components/Testimonials";

import React from "react";
import Cynics from "./_components/Cynics";

const Home = () => {
  return (
    <>
      <main className="h-full space-y-24">
        <div className="bg-[#f5f5f5] pb-32">
          <div className=" pt-4">
            <Navbar />
          </div>
          <Hero />
        </div>
        <Collobarators />
        <div className="bg-[#f5f5f5] py-28">
          <CardSection />
        </div>
        <div className="pb-28">
          <AboutUs />
        </div>
        <div className="">
          <Testimonials />
        </div>
        <div className="mx-auto max-w-screen-2xl space-y-28 pb-10 sm:container">
          <Events />
          <Cynics />
          <Programs />
        </div>
        <div className="space-y-56 bg-[#f5f5f5] py-28 ">
          <Placement />
          <Connect />
        </div>
        <div className="mt-[0!important] bg-[#eff3f9] py-28">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
