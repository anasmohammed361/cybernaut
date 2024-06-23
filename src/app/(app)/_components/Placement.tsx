'use client'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const Placement = () => {
  return (
    <section className="container space-y-10 font-poppins">
     <div className="space-y-6">
     <h3 className="font-bold text-4xl text-center">Our Placement Record</h3>
      <p className="text-center mx-auto max-w-screen-md">Our proven track record in placements reflects our commitment to nurturing talent and bridging industry needs.</p>
     </div>
      <Card className="p-4">
        <Carousel
          className="w-full"
          opts={{
            loop:true
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="relative aspect-square rounded-xl">
                    <Image
                      fill={true}
                      src={"https://picsum.photos/500"}
                      className="rounded-xl"
                      alt="placement"
                    />
                    <div className="absolute bottom-3 left-0 w-full p-2">
                      <h3 className="text-2xl font-bold">Steve Marimuthu</h3>
                      <p>CFO, Google</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-5rem]" />
          <CarouselNext className="right-[-5rem]" />
        </Carousel>
      </Card>
    </section>
  );
};

export default Placement;
