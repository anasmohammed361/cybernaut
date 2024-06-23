import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dock, DockIcon } from "@/components/ui/dock";
import SparklesText from "@/components/ui/sparkles-text";
import { AirVent } from "lucide-react";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="grid grid-cols-2 w-full py-20 gap-2">
      <Card className="p-20 flex col-span-2 rounded-xl ">
        <div className="basis-2/5 flex flex-col ">
          <h3 className="text-3xl font-bold">Courses</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            numquam dicta odit maiores, animi perspiciatis. Enim assumenda ad
            numquam dicta odit maiores, animi perspiciatis. Enim assumenda ad
            eum ab.
          </p>
          <div className="flex  gap-2 justify-start items-end">
            <Dock className="rounded-full mx-0">
              <DockIcon>
                <AirVent className="size-3" />
              </DockIcon>
              <DockIcon>
                <AirVent className="size-3" />
              </DockIcon>
            </Dock>
            <Button className="rounded-full" size={"lg"} variant={"outline"}>
              Know More
            </Button>
          </div>
        </div>
        <div className="basis-3/5  flex gap-3 justify-end items-center">
          <p className="text-4xl text-[#a7a7a7] font-bold">We make you</p>
          <div className="flex flex-col">
            <SparklesText
              sparklesCount={3}
              colors={{
                first: "#418bf3",
                second: "#418bf3",
              }}
              text="Think"
            />
            <SparklesText
              sparklesCount={3}
              colors={{
                first: "#000000",

                second: "#000000",
              }}
              text="Thrive"
            />
            <SparklesText
              sparklesCount={2}
              colors={{
                first: "#000000",

                second: "#000000",
              }}
              text="Transform"
            />
          </div>
        </div>
      </Card>
      <Card className="p-20 flex flex-col col-span-1 rounded-xl">
        <h3 className="text-3xl font-bold">Courses</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam
          dicta odit maiores, animi perspiciatis. Enim assumenda ad numquam
          dicta odit maiores, animi perspiciatis. Enim assumenda ad eum ab.
        </p>
        <div className="flex  gap-2 justify-start items-end">
          <Dock className="rounded-full mx-0">
            <DockIcon>
              <AirVent className="size-3" />
            </DockIcon>
            <DockIcon>
              <AirVent className="size-3" />
            </DockIcon>
          </Dock>
          <Button className="rounded-full" size={"lg"} variant={"outline"}>
            Know More
          </Button>
        </div>
      </Card>
      <Card className="p-20 flex flex-col col-span-1 rounded-xl">
        <h3 className="text-3xl font-bold">Courses</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam
          dicta odit maiores, animi perspiciatis. Enim assumenda ad numquam
          dicta odit maiores, animi perspiciatis. Enim assumenda ad eum ab.
        </p>
        <div className="flex  gap-2 justify-start items-end">
          <Dock className="rounded-full mx-0">
            <DockIcon>
              <AirVent className="size-3" />
            </DockIcon>
            <DockIcon>
              <AirVent className="size-3" />
            </DockIcon>
          </Dock>
          <Button className="rounded-full" size={"lg"} variant={"outline"}>
            Know More
          </Button>
        </div>
      </Card>
      <Card className="p-20 flex col-span-2 rounded-xl ">
        <div className="basis-3/5  flex gap-3 justify-start items-center">
          <p className="text-4xl text-[#a7a7a7] font-bold">We make you</p>
          <div className="flex flex-col">
            <SparklesText
              sparklesCount={3}
              colors={{
                first: "#418bf3",
                second: "#418bf3",
              }}
              text="Think"
            />
            <SparklesText
              sparklesCount={3}
              colors={{
                first: "#000000",

                second: "#000000",
              }}
              text="Thrive"
            />
            <SparklesText
              sparklesCount={2}
              colors={{
                first: "#000000",

                second: "#000000",
              }}
              text="Transform"
            />
          </div>
        </div>
        <div className="basis-2/5 flex flex-col text-right ">
          <h3 className="text-3xl font-bold">Courses</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            numquam dicta odit maiores, animi perspiciatis. Enim assumenda ad
            numquam dicta odit maiores, animi perspiciatis. Enim assumenda ad
            eum ab.
          </p>
          <div className="flex  gap-2 justify-end items-end">
            <Dock className="rounded-full mx-0">
              <DockIcon>
                <AirVent className="size-3" />
              </DockIcon>
              <DockIcon>
                <AirVent className="size-3" />
              </DockIcon>
            </Dock>
            <Button className="rounded-full" size={"lg"} variant={"outline"}>
              Know More
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default WhatWeDo;
