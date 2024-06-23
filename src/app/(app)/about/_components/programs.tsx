import { PackageOpen } from "lucide-react";
import React from "react";
const SingleProgram = () => {
  return (
    <div className="flex">
      <div className="basis-1/5">
        <PackageOpen className="size-12"/>
      </div>
      <div className="basis-4/5 flex flex-col gap-3">
        <h2 className="font-bold text-xl">Campus Ambassador Program</h2>
        <p>Engage students as Ambassador to represent cybernaut on campus</p>
      </div>
    </div>
  );
};

export default function Programs() {
  return (
    <section className="py-20">
      <section className="grid gap-10 grid-cols-3">
        <SingleProgram />
        <SingleProgram />
        <SingleProgram />
        <SingleProgram />
        <SingleProgram />
        <SingleProgram />
      </section>
    </section>
  );
}
