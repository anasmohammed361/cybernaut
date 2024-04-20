import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Cynics = () => {
  const cynics: {
    title: string;
    content: string;
    image: string;
  }[] = [
    {
      title: "Tech Communities",
      content:
        "Engage Students as ambassaders to represent  Cybernaut on campus",
      image: "https://picsum.photos/500",
    },
    {
      title: "Tech Communities",
      content:
        "Engage Students as ambassaders to represent  Cybernaut on campus",
      image: "https://picsum.photos/500",
    },
    {
      title: "Tech Communities",
      content:
        "Engage Students as ambassaders to represent  Cybernaut on campus",
      image: "https://picsum.photos/500",
    },
  ];

  const programs: {
    title: string;
    content: string;
  }[] = [
    {
      title: "Campus Ambassador Program",
      content:
        "Engage students as ambassadors to represent Cybernaut on campus",
    },
    {
      title: "Campus Ambassador Program",
      content:
        "Engage students as ambassadors to represent Cybernaut on campus",
    },
    {
      title: "Campus Ambassador Program",
      content:
        "Engage students as ambassadors to represent Cybernaut on campus",
    },
    {
      title: "Campus Ambassador Program",
      content:
        "Engage students as ambassadors to represent Cybernaut on campus",
    },
  ];
  return (
    <section className="container font-poppins relative">
      <Image src={'/svgs/cdsc.svg'} alt="cdsc" className="absolute top-0 -right-40 -z-10" height={240} width={240}/>
      <Image src={'/svgs/cdsc.svg'} alt="cdsc" className="absolute bottom-0 -left-40 z-10"  height={240} width={240}/>
      <div className="flex gap-4">
        <div className="basis-[40%] min-h-full">
          <Card className="flex  flex-col gap-20 p-4 min-h-full">
            {cynics.map((cynic, i) => (
              <div
                key={i}
                className="flex gap-6 rounded-xl p-4 hover:bg-[#eff3f9]"
              >
                <div className="relative aspect-square w-36">
                  <Image
                    fill
                    src={cynic.image}
                    className="rounded-full"
                    alt="img"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold">{cynic.title}</h4>
                  <p className="text-sm">{cynic.content}</p>
                </div>
              </div>
            ))}
            <div className="w-full grow rounded-2xl bg-[#eff3f9]"></div>
            <div></div>
          </Card>
        </div>
        <div className="basis-[60%]">
          <Card className="space-y-10">
            <div className="mt-10 space-y-10 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold uppercase">CYNICS</h3>
                <h6 className="font-bebas text-2xl font-medium uppercase">
                  navigating cybernaut&apos;s advancing vision & youth
                </h6>
              </div>
              <p className="mx-auto max-w-[36rem] text-xs ">
                Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo
                lacus amet et. Pulvinar etiam sit nec nunc massa cursus. Sed eu
                arcu risus ultrices porta. Id est integer et lectus. Lorem ipsum
                dolor sit amet consectetur. Dui lacus purus commodo lacus amet
                et. Pulvinar etiam sit nec nunc massa cursus. Sed eu arcu risus
                ultrices porta. Id est integer et lectus.
              </p>
              <div className="h-96  rounded-3xl p-10">
                <div className="h-full rounded-3xl bg-[#eff3f9]"></div>
              </div>
              <div className="grid grid-cols-2 gap-8 px-10 ">
                {programs.map((program, i) => (
                  <Card
                    key={i}
                    className="border-2 border-solid border-black px-8 py-6 text-left"
                  >
                    <h4 className="text-lg font-bold">{program.title}</h4>
                    <p className="text-sm">{program.content}</p>
                  </Card>
                ))}
              </div>
              <Button variant={'outline'} className="border-solid border border-black rounded-full ">
                Know More
              </Button>
              <div></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cynics;
