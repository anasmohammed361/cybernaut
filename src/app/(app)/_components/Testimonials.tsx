"use client";
import { Card } from "@/components/ui/card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

import Image from "next/image";
import React from "react";
import { items } from "./items";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="container font-poppins">
      <FollowerPointerCard>
      <Card className="flex p-6 ">
        <div className="relative basis-[30%]  overflow-clip rounded-3xl bg-[url(/imgs/home-blur.png)] bg-cover">
          <div className="absolute z-10 grid h-full w-full  place-items-center backdrop-blur">
            <Image
              src={"/logo-s.png"}
              alt="logo"
              width={90}
              height={90}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="grid grid-cols-2 gap-x-16 ">
              <div className="relative top-12 col-span-2 mx-auto size-40 rotate-90">
                <Image alt="img" fill src={"/svgs/cut-square.svg"} />
                <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center flex-col rotate-[270deg]">
                    <p className="text-2xl font-bold">4.5</p>
                    <div className="flex gap-2 ">
                    <Star className="size-5 text-orange-300 " />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    </div>
                  <p className="font-semibold"> Tech Series</p>
                </div>
              </div>
              <div className="relative  size-40">
                <Image alt="img" fill src={"/svgs/cut-square.svg"} />
                <div className="absolute top-1/2 -translate-y-1/2 left-8 flex items-center flex-col rotate-0">
                    <p className="text-2xl font-bold">4.5</p>
                    <div className="flex gap-2 ">
                    <Star className="size-5 text-orange-300 " />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    </div>
                  <p className="font-semibold"> Tech Series</p>
                </div>
              </div>
              <div className="relative  size-40 rotate-180">
                <Image alt="img" fill src={"/svgs/cut-square.svg"} />
              <div className="absolute top-1/2 -translate-y-1/2 left-8 flex items-center flex-col rotate-180">
                    <p className="text-2xl font-bold">4.5</p>
                    <div className="flex gap-2 ">
                    <Star className="size-5 text-orange-300 " />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    </div>
                  <p className="font-semibold"> Tech Series</p>
                </div>
              </div>
              <div className="relative bottom-12 col-span-2 mx-auto size-40 rotate-[270deg]">
                <Image alt="logo" fill src={"/svgs/cut-square.svg"} />
                <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center flex-col rotate-90">
                    <p className="text-2xl font-bold">4.5</p>
                    <div className="flex gap-2 ">
                    <Star className="size-5 text-orange-300 " />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    <Star className="size-5" />
                    </div>
                  <p className="font-semibold"> Tech Series</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-2 basis-[66%] space-y-10 overflow-x-hidden">
          <div></div>
          <div className="space-y-4 text-center">
            <h3 className="text-4xl font-bold">Our Testimonials</h3>
            <p className="mx-auto max-w-[32rem] text-sm">
              Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo
              lacus amet et. Pulvinar etiam sit nec nunc massa cursus.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-16">
            {items.map((item, ix) => (
              <div
                key={ix}
                className={cn(`animate-infinite-scroll flex gap-6 `)}
              >
                {item.map((e, i) => (
                  <Card
                    key={i}
                    className={cn(
                      `w-60 min-w-60 bg-[#eff3f9] p-3 `,
                      ix == 1 && "-translate-x-[7.5rem]",
                    )}
                  >
                    {e.content}
                  </Card>
                ))}
                {item.map((e, i) => (
                  <Card
                    key={i}
                    aria-hidden
                    className={cn(
                      `w-60 min-w-60 bg-[#eff3f9] p-3`,
                      ix == 1 && "-translate-x-[7.5rem]",
                    )}
                  >
                    {e.content}
                  </Card>
                ))}
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </Card>
      </FollowerPointerCard>
    </section>
  );
};

export default Testimonials;
