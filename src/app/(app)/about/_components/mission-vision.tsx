import { Card } from "@/components/ui/card";
import React from "react";
import { MdiLightbulbAlert,Fa6SolidHandshake } from '@/components/svg/index'


const MissionVision = () => {
  return (
    <section className="py-20 space-y-20">
      <section className="flex gap-20 ">
        <div className="basis-[70%] flex-col space-y-8">
          <h1 className="text-3xl font-bold">
          Empowering minds, shaping futures, and paving the path to limitless possibilities.
          </h1>
          <p>
          we&apos;re dedicated to empowering minds and shaping futures through innovative education. Our mission is to unlock limitless potential, guiding individuals on a journey of growth, discovery, and endless possibilities. Join us as we pave the way for a brighter tomorrow through transformative learning experiences.
          </p>
          <div className="flex justify-between gap-10 text-center">
            <Card className="rounded-2xl space-y-3 p-4 bg-[#ececec]">
              <div className="size-24 mx-auto mt-3  rounded-full  grid place-items-center bg-neutral-200">
              <MdiLightbulbAlert className="size-[70%] text-neutral-500" />
              </div>
              <p className="font-bold">Innovation</p>
              <p className="">Creativity and forward-thinking to drive continuous improvement and advancements in education.</p>
            </Card>
            <Card className="rounded-2xl space-y-5 p-4 bg-[#ececec]">
            <div className="size-24 mx-auto mt-3  rounded-full  grid place-items-center bg-neutral-200">
              <Fa6SolidHandshake className="size-[70%] text-neutral-500" />
              </div>
              <p className="font-bold">Collaboration</p>
              <p className="">Collaborative and inclusive environment where diverse perspectives are valued and respected.</p>
            </Card>
            <Card className="rounded-2xl space-y-5 p-4 bg-[#ececec]">
            <div className="size-24 mx-auto mt-3  rounded-full  grid place-items-center bg-neutral-200">
              <MdiLightbulbAlert className="size-[70%] text-neutral-500" />
              </div>
              <p className="font-bold">Empowerment</p>
              <p className="">Empower individuals to take ownership of their learning journey and personal growth.</p>
            </Card>
          </div>
        </div>
        <div className="basis-[30%] relative">
          <div className="h-full w-full rounded-2xl bg-white"></div>
        </div>
      </section>
      <section className="flex gap-10 ">
        <Card className="border-2 border-black space-y-3 bg-[#f5f5f5] rounded-2xl p-10">
          <h1 className="text-3xl font-bold">Mission</h1>
          <p>
          We bridge the knowledge-to-growth gap with innovative solutions and affordable courses. Empowering learners with hands-on experience and high-quality education. Our commitment includes industry-grade internships and cutting-edge tools for an enhanced learning journey.          </p>
        </Card>
        <Card className="border-2 border-black space-y-3 rounded-2xl bg-[#f5f5f5] p-10">
          <h1 className="text-3xl font-bold">Vision</h1>
          <p>
          We envision global leadership in educational technology, driven by teaching excellence. Our goal is personalized, interactive education fueled by cutting-edge technology. We strive to transform learning, making knowledge universally accessible and impactful.
          </p>
        </Card>
      </section>
    </section>
  );
};

export default MissionVision;
