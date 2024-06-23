"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import React from "react";

import { cn } from "@/lib/utils";

const AboutUs = () => {
  return (
    <section className=" py-20">
      <div className="space-y-2">
        <h3 className="text-4xl font-bold text-center ">About Us</h3>
        <p className="text-muted-foreground max-w-2xl text-center mx-auto">
        we merge innovation with education to shape tomorrow&apos;s leaders. Our mission is to make learning accessible, engaging, and impactful for everyone, empowering individuals to thrive in a rapidly evolving world.
        </p>
      </div>
      <BentoGrid className="md:grid-cols-6 grid-rows-2 py-10">
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            className={cn(item.className)}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutUs;

const items = [
  {
    title: <p className="text-xl">Tailored Learning Paths</p>,
    description: "We offer personalized learning experiences, catering to individual needs and preferences.",

    className: "col-span-2 row-span-1",
  },
  {
    title: <p className="text-xl font-bold">Industry-Aligned Curriculum</p>,
    description: "Our courses are designed in collaboration with industry experts, ensuring relevance and practicality",

    className: "col-span-1 row-span-1",
  },
  {
    title: <p className="text-xl">Cutting-Edge Technology</p>,
    description: "We leverage the latest advancements in technology to enhance the learning journey.",

    className: "col-span-1 row-span-2",
  },
  {
    title: <p className="text-xl">Hands-On Experience</p>,
    description:
      "Our industry-grade internships provide valuable hands-on experience and real-world insights.",

    className: "col-span-2 row-span-1",
  },
  {
    title: <p className="text-xl">Innovative Products</p>,
    description: "We develop and integrate innovative tools and solutions to optimize the educational experience.",

    className: "col-span-1 row-span-1",
  },
  {
    title: <p className="text-xl">University Partnerships</p>,
    description: " We collaborate with renowned institutions to broaden learning horizons and opportunities.",

    className: "col-span-2 row-span-1",
  },
  {
    title: <p className="text-xl">Continuous Learning</p>,
    description: "Our commitment to lifelong learning ensures ongoing support and growth for our learners.",

    className: "col-span-1 row-span-1",
  },
  {
    title: <p className="text-xl">Community Engagement</p>,
    description: "We foster a vibrant community of learners, educators, and industry professionals, promoting collaboration and knowledge sharing.",

    className: "col-span-1 row-span-1",
  },
];
