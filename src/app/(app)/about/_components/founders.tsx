import React from "react";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

import { LineMdTwitterX } from "@/components/svg";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
export default function Founders() {
  return (
    <section className="space-y-2">
      <h1 className="text-4xl text-center font-bold">Our Founders</h1>
      <p className="text-center max-w-2xl mx-auto">
        Meet our visionary founders, catalysts of educational innovation and
        excellence.
      </p>
      <div className="flex gap-20 w-full justify-between py-20">
        {founders.map((founder, i) => (
          <div key={i} className="w-full">
            <div
              key={i}
              className="relative min-h-[30rem] grow rounded-2xl overflow-hidden"
            >
              <Image
                src={founder.url}
                alt={`Founder ${i}`}
                className="h-full rounded-2xl object-cover"
                fill
              />
              <div className="absolute z-20  px-10 bottom-0 min-h-24 w-full bg-gradient-to-b from-[#0000005d] to-[#00000085]">
                <Dock className="border-0 w-min mx-0 my-0">
                  <DockIcon className="bg-[#d9d9d9]">
                    <Link href={founder.linkedIn} target="_blank">
                      {" "}
                      <Linkedin className="size-4 text-black" />
                    </Link>
                  </DockIcon>
                  <DockIcon className="bg-[#d9d9d9]" >
                    <Link href={founder.instagram}  target="_blank">
                      <Instagram className="size-4  text-black" />
                    </Link>
                  </DockIcon>
                  <DockIcon className="bg-[#d9d9d9]">
                    <Link href={founder.twitter}  target="_blank">
                      <LineMdTwitterX className="size-4 text-black" />
                    </Link>
                  </DockIcon>
                </Dock>
                <p className="text-white text-sm pb-2">{founder.description}</p>
              </div>
            </div>
            <div className="px-10 py-4 space-y-2">
              <h1 className="text-2xl font-bold">{founder.name}</h1>
              <p className="font-light text-sm uppercase ">{founder.postition}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const founders: {
  url: string;
  description: string;
  linkedIn: string;
  instagram: string;
  twitter: string;
  name: string;
  postition: string;
}[] = [
  {
    url: "/founder/f.png",
    description:
      "A seasoned expert in marketing and a captivating speaker who inspires and drives success.",
    linkedIn: "https://www.linkedin.com/in/jayasurya-gnanavel-b96300197/",
    instagram: "https://www.instagram.com/jsgnanaveloff",
    twitter: "https://twitter.com",
    name: "Jayasurya Gnanavel",
    postition: "CEO",
  },
  {
    url: "/founder/f.png",
    description:
      "An expert designer and strategist, shaping innovative solutions and driving strategic success.",
    linkedIn: "https://www.linkedin.com/in/manish-kumar-b-175a701b0/",
    instagram: "https://www.instagram.com/m.x.k.m.r/",
    twitter: "https://twitter.com",
    name: "Manish Kumar",
    postition: "President",
  },
  {
    url: "/founder/f.png",
    description:
      "A skilled content writer crafting compelling narratives",
    linkedIn: "https://www.linkedin.com/in/keerthana-r-85b702194/",
    instagram: "https://www.instagram.com/ar_kaay/",
    twitter: "https://twitter.com",
    name: "Keerthana R",
    postition: "Co Founder",
  },
];
