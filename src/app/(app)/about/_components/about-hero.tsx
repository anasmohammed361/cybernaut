import React from "react";
import { Card } from "@/components/ui/card";
import Globe from "@/components/ui/globle";
const AboutHero = () => {
  return (
    <div className=" py-20">
      <Card className="min-h-[40rem] bg-[#eaeaea5d]  relative pt-[13%] overflow-hidden">
      <div className="absolute top-0 z-0 w-full h-full  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className="z-1">
          <h1 className="uppercase text-8xl font-bold mx-auto text-center text-transparent bg-clip-text bg-gradient-to-b from-black to-[#84868a]">
            The World around
          </h1>
          <h1 className="uppercase text-center mx-auto text-9xl font-extrabold text-[#418bf3]">
            CYBERNAUT
          </h1>
        </div>
        <Globe className="inset-x-0 top-72 max-w-[50rem]" />
      </Card>
    </div>
  );
};

export default AboutHero;
