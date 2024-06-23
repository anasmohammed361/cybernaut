import React from "react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const AboutUs = () => {
  return (
    <section className="space-y-20">
      <section className="max-w-screen-3xl mx-auto flex justify-between gap-24 font-poppins sm:container">
        <div className="flex basis-1/2 flex-col gap-5">
          <h2 className="text-4xl font-bold text-shadow">
            About Us
          </h2>
          <h5 className="text-4xl font-medium leading-[3.5rem]">
          Spreading what we know to help others grow.
          </h5>
          <p className="text-sm">
          At Cybernaut, we are passionate about revolutionizing education through innovative solutions and cutting-edge technology. Our mission is to bridge the gap between knowledge and growth by providing high-quality, affordable learning opportunities for all. With a dedicated team of expert industrial lecturers and a commitment to excellence, we offer premium courses, industry-grade internships, and innovative tech solutions to empower learners.
          </p>
          <div className="gridItems-center flex gap-4">
            <Button
              variant="outline"
              size={"lg"}
              className="rounded-full font-bold ring-1 ring-black"
            >
              About Us
            </Button>
            <span className="gridItems-center flex text-sm text-[#D1D1D1]">
              Swipe to know about us
              <MoveRight className="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="basis-1/2">
          <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[auto]">
            {gridItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                className={item.className}
                description={item.description}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
      <div className="hflex-col gridItems-center relative flex justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black dark:bg-grid-white/[0.05]">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default AboutUs;

const testimonials: { title: string }[] = [
  {
    title: "CRUD",
  },
  {
    title: "cybernuat junior space",
  },
  {
    title: "cdsc",
  },
  {
    title: "innotech titans",
  },{
    title:"Webzenith Solutions"
  }
];

const gridItems = [
  {
    title: "20000+",
    description: "Students Trained",
    className: "md:col-span-2",
  },
  {
    title: "5+",
    description: "MOUs Signed",
    className: "md:col-span-1",
  },
  {
    title: "50+",
    description: "Students placed.",

    className: "md:col-span-1",
  },
  {
    title: "10000+",
    description:
      "Internships provided.",

    className: "md:col-span-2",
  },
];
