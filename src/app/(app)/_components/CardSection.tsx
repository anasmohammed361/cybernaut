"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CardSection = () => {
  return (
   <section className="space-y-24">
     <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3  sm:container max-w-screen-3xl mx-auto">
      <TechTrio />
      <UiUx />
      <FullStack />
    </div>
    <div className=" space-y-4  font-poppins">
        <h2 className="font-bold text-4xl text-center">Out Best Learning Curve</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto text-center">Our 360-degree learning curve ensures comprehensive education, covering every aspect of the subject for a holistic understanding and skill development. </p>
    </div>
   </section>
  );
};

const TechTrio = () => {
  return (
    <CardContainer className="" containerClassName="p-0">
      <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]   ">
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src="/imgs/Trio.png"
            height="1000"
            width="1000"
            className="h-96 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-10 flex justify-between items-center">
          <div className="space-y-2">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold  dark:text-white"
              >
                TechTrio
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                C++, Java , Python
              </CardItem>
          </div>
          <div>
            <Button variant={'outline'} className="rounded-full text-xl p-5"><span className="var(--font-inter)">₹ </span><span className="font-poppins">2000</span></Button>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const UiUx = () => {
  return (
    <CardContainer className="" containerClassName="p-0">
      <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]   ">
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-96 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-10 flex justify-between items-center">
          <div className="space-y-2">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold  dark:text-white"
              >
                Ui/Ux
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                Figma, Adobe
              </CardItem>
          </div>
          <div>
            <Button variant={'outline'} className="rounded-full text-xl p-5"><span className="var(--font-inter)">₹ </span><span className="font-poppins">2000</span></Button>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};


const FullStack = () => {
  return (
    <CardContainer className="" containerClassName="p-0">
      <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]   ">
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-96 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-10 flex justify-between items-center">
          <div className="space-y-2">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold  dark:text-white"
              >
                Full Stack
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                Anas bro, add panirunga
              </CardItem>
          </div>
          <div>
            <Button variant={'outline'} className="rounded-full text-xl p-5"><span className="var(--font-inter)">₹ </span><span className="font-poppins">2000</span></Button>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};


export default CardSection;
