import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const items: {
  image: string;
  heading: string;
  content: string[];
  className: string;
}[] = [
  {
    image: "/imgs/Trio.png",
    heading: "Innovation Hub",
    content: [
      "We thrive on creativity and visionary thinking, constantly pushing boundaries to pioneer new educational solutions and technologies that inspire and transform.",
    ],
    className: "",
  },
  {
    image: "/imgs/Trio.png",
    heading: "Integrity Fortitude",
    content: [
      " Upholding the highest ethical standards, we foster trust, transparency, and accountability in all our interactions, ensuring integrity is at the core of everything we do.",
    ],
    className: "row-span-2",
  },
  {
    image: "/imgs/Trio.png",
    heading: "Empowerment Engine",
    content: [
      "Empowering individuals to achieve their full potential, we provide the tools, resources, and support needed to fuel personal and professional growth.",
    ],
    className: "",
  },
  {
    image: "/imgs/Trio.png",
    heading: "Collaboration Nexus",
    content: [
      "Collaboration is our cornerstone, driving meaningful partnerships and alliances that leverage collective expertise and networks to drive impactful change.",
    ],
    className: "",
  },
  {
    image: "/imgs/Trio.png",
    heading: "Inclusive Oasis",
    content: [
      "Celebrating diversity and inclusivity, we create a welcoming and equitable learning environment where everyone's unique strengths and perspectives are valued and embraced.",
    ],
    className: "",
  },
];
const CoreValues = () => {
  return (
    <section className="py-20 space-y-5">
      <h1 className="text-4xl font-bold text-center">Core Values</h1>
      <p className=" max-w-2xl mx-auto text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
        tempore?
      </p>
      <section className="grid grid-cols-3 gap-3 py-4">
        {items.map((item, i) => (
          <Card className={cn("p-8 space-y-8 border-2 border-black rounded-2xl", item.className)} key={i}>
            <div className="mx-auto flex justify-center">
              <div className="bg-[#f5f5f5] rounded-full size-32"></div>
            </div>
            <div className="text-center space-y-5">
              <h3 className="text-2xl font-bold">{item.heading}</h3>
              {item.content.map((content, i) => (
                <p key={i} className="text-sm">{item.content}</p>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default CoreValues;
