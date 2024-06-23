import React from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { 
  Fa6SolidHandshake,
  CilIndustry,
  MdiLightbulbOn10,
  FluentPeopleCommunity20Filled,

  MaterialSymbolsSearchInsightsRounded,
  StreamlineDecentWorkAndEconomicGrowth,
  CarbonSkillLevelAdvanced,
  
 } from "@/components/svg/index";

const content = [
  {
    title: "The MOU Program",
    callingCard: "Do you want Cybernaut to be part of your organization?",
    desc: "Our Memorandum of Understanding (MOU) program signifies our commitment to fostering collaborative partnerships with institutions and organizations that share our vision for transformative education. Through this program, we establish formal agreements to work together on shared goals, initiatives, and projects that advance the field of education. Our MOUs enable us to leverage collective expertise, resources, and networks to create impactful learning experiences for students, professionals, and educators alike. We are dedicated to cultivating meaningful partnerships that drive innovation, accessibility, and excellence in education.",
    reasons: [
      {
        title: "Collaboration",
        icon: <Fa6SolidHandshake className="size-[70%] text-neutral-500" />,
      },
      {
        title: "Industry Alignment",
        icon: <CilIndustry className="size-[70%] text-neutral-500" />,
      },
      {
        title: "Skill Enhancement",
        icon: <MdiLightbulbOn10 className="size-[70%] text-neutral-500" />,
      },

      {
        title: "Networking Benefits",
        icon: <FluentPeopleCommunity20Filled className="size-[70%] text-neutral-500" />,
      },
    ],
  },
  {
    title: "The VAC Program",
    callingCard: "Do you want our expert lecturers in your college?",
    desc: "Our Voluntary Advisory Committee (VAC) program gathers experienced professionals and industry leaders to provide valuable insights and guidance, shaping our educational initiatives for maximum impact and relevance. Their input ensures that our offerings remain effective and aligned with industry needs, driving positive change in education.",
    reasons: [
      {
        title: "Professional Insights",
        icon: <MaterialSymbolsSearchInsightsRounded className="size-[70%] text-neutral-500" />,
      },
      {
        title: "Strategic Guidance",
        icon: <StreamlineDecentWorkAndEconomicGrowth className="size-[70%] text-neutral-500" />,
      },
      {
        title: "Career Advancement",
        icon: <CarbonSkillLevelAdvanced className="size-[70%] text-neutral-500" />,
      },
    ],
  },
];

const Programs = () => {
  return (
    <div className="relative max-sm:px-8 flex flex-col lg:flex-row flex-wrap gap-20 ">
      <div className="flex-1 flex flex-col justify-start gap-32">
        {content.map((item, i) => (
          <div key={i} className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <h2 className="text-4xl font-medium">{item.callingCard}</h2>
            <p className="text-justify">{item.desc}</p>

            <div className="flex flex-col gap-5">
              <h4 className="text-2xl font-semibold mt-5">Why Choose us?</h4>
              <ul className="flex flex-wrap items-center max-sm:justify-center gap-5">
                {item.reasons.map((reason, i) => (
                  <React.Fragment key={i}>
                    {typeof reason === "object" && (
                      <li
                        key={i}
                        className="flex flex-col gap-2 items-center justify-center"
                      >
                        <div className="size-24 rounded-full sm:rounded-lg grid place-items-center bg-neutral-200">
                          {reason.icon}
                        </div>
                        <span>{reason.title}</span>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-5">
              <Button
                variant="outline"
                className="w-fit border-black border-2 font-bold rounded-full"
              >
                Know More
              </Button>
              <span className="text-sm text-neutral-300 font-semibold">
                Swipe to know more &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 lg:sticky lg:top-[10%] lg:inset-0  bg-[#EFF3F9] rounded-3xl h-fit">
        <ContactForm
          title="Let's Collab"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus tempora nostrum eos tempore ipsam"
        />
      </div>
    </div>
  );
};

export default Programs;
