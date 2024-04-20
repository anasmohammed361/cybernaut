"use client";
import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Founders = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="min-h-screen">
      <h3 className="text-center text-6xl font-bold">Our Founders</h3>
      <Carousel
        className="mx-auto w-full max-w-5xl"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-96 w-full">
                  <CardContent className="flex  h-full justify-center overflow-visible p-6">
                    <div className="my-auto">
                      <AnimatedTooltip
                        size={500}
                        items={[
                          {
                            id: 1,
                            designation: "CEO",
                            image: "/user.png",
                            name: "JayaSurya Gnanavel",
                          },
                        ]}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mx-auto flex max-w-16 justify-between gap-1 py-2 text-center text-sm text-muted-foreground ">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div   
              animate={
                i + 1 === current
                  ? {
                      flexGrow: "1",
                      
                    }
                  : {}
              }
              className={cn(
                "aspect-square h-2 rounded-full bg-gray-700 transition-all ]",
              )}
              key={i}
            ></motion.div>
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Founders;
