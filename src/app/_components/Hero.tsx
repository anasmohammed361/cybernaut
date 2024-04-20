"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="mt-28 flex justify-between gap-10 md:container  max-w-screen-3xl mx-auto ">
      <div className="font-poppins basis-[43%] space-y-8">
        <h1 className="text-6xl font-black uppercase tracking-widest">
          Cybernaut
        </h1>
        <h2 className="text-lg uppercase tracking-[0.8em] font-medium">
          Endeavour to explore
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          perferendis nihil est impedit reiciendis repellendus sint non sit quae
          sunt.
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
        <Image src={"/imgs/laptop.png"} alt="laptop" height={0} width={800} />
      </div>
    </section>
  );
};
