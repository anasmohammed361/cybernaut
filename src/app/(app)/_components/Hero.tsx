"use client";

import {
  DeviconFigma,
  LogosAdobeIllustrator,
  LogosJava,
  LogosPython,
  LogosTypescriptIcon,
  VscodeIconsFileTypeCpp3,
  VscodeIconsFileTypeJsOfficial,
} from "@/components/svg";
import { Button } from "@/components/ui/button";
import OrbitingCircles from "@/components/ui/orbiting-circle";

import React from "react";

export const Hero = () => {
  return (
    <section className="mt-28 flex justify-between gap-10 md:container  max-w-screen-3xl mx-auto ">
      <div className="font-poppins basis-[43%] space-y-8 flex  flex-col justify-center">
        <h1 className="text-6xl font-black uppercase tracking-widest">
          Cybernaut
        </h1>
        <h2 className="text-lg uppercase tracking-[0.8em] font-medium">
          Endeavour to explore
        </h2>
        <p>
          From affordable courses to high-quality learning for everyone, we
          offer excellent courses, practical internships, and innovative tech
          solutions to help you gain valuable skills and knowledge.
        </p>
        <div className="flex gap-8">
          <Button
            variant={"outline"}
            className="border border-black outline-black"
          >
            Programs
          </Button>
          <Button
            variant={"outline"}
            className="border border-black outline-black"
          >
            Services
          </Button>
          <Button
            variant={"outline"}
            className="border border-black outline-black"
          >
            Products
          </Button>
        </div>
        <div>
          <Button
            variant={"outline"}
            className="rounded-full border border-black outline-black"
          >
            {" "}
            Know More
          </Button>
        </div>
      </div>
      <div className="flex basis-[55%] justify-center">
        <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Explore
          </span>

          {/* Inner Circles */}
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <DeviconFigma className="size-6" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={30}
            delay={50}
            radius={140}
          >
            <LogosTypescriptIcon className="size-6" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[30px] w-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <LogosPython className="size-6" />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            reverse
          >
            <LogosJava className="size-6" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            delay={20}
            reverse
          >
            <VscodeIconsFileTypeCpp3 className="size-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={190}
            duration={40}
            delay={80}
            reverse
          >
            <VscodeIconsFileTypeJsOfficial className="size-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={190}
            duration={40}
            delay={140}
            reverse
          >
            <LogosAdobeIllustrator className="size-8" />
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
};
