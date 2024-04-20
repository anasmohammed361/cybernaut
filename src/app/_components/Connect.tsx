"use client";
import { Input } from "@/components/ui/a-input";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import React from "react";

const Connect = () => {
  return (
    <section className="container">
      <section className="flex min-h-[50rem] rounded-3xl bg-white ">
        <div className="basis-[40%] rounded-3xl bg-[#d3d3d3]"></div>
        <div className="mx-auto max-w-[36rem] basis-[60%] space-y-12 bg-transparent px-4 py-20 text-center  font-poppins">
          <h1 className="text-4xl font-medium ">Let’s Connect</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            commodi sed architecto pariatur.
          </p>
          <div className="space-y-4 max-w-96 mx-auto">
            <Input placeholder="Full Name" />
            <Input placeholder="Designation" />
            <Input placeholder="Organisation" />
            <Input placeholder="Email Id" />
            <PhoneInput
              defaultCountry="IN"
              maxLength={10}
              placeholder="Mobile"
            />
          </div>
          <Button className="">Let’s Collab</Button>
        </div>
      </section>
    </section>
  );
};

export default Connect;
