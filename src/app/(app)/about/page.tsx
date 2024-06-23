import React from "react";
import AboutHero from "./_components/about-hero";
import AboutUs from "./_components/about-us";
import Collobarators from "../_components/Collaborators";
import WhatWeDo from "./_components/what-we-do";
import MissionVision from "./_components/mission-vision";
import Founders from "./_components/founders";
import CoreValues from "./_components/core-values";
import Programs from "./_components/programs";
const page = () => {
  return (
    <main className="">
      <section className="container">
        <AboutHero />
        <AboutUs />
        <div className="pb-32">
        <Collobarators />
        </div>
      </section>
      <section className="bg-[#f5f5f5]">
        <section className="container">
          <WhatWeDo />
          <MissionVision />
          <Founders/>
          <CoreValues/>
          <Programs/>
        </section>
      </section>
    </main>
  );
};

export default page;
