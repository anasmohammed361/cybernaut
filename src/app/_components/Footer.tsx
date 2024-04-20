import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Footer = () => {
  const footerAvatars: { src: string; alt: string; fallback: string }[] = [
    {
      src: "https://github.com/shadcn.png",
      alt: "logo",
      fallback: "CN",
    },
    {
      src: "https://github.com/shadcn.png",
      alt: "logo",
      fallback: "CN",
    },
    {
      src: "https://github.com/shadcn.png",
      alt: "logo",
      fallback: "CN",
    },
    {
      src: "https://github.com/shadcn.png",
      alt: "logo",
      fallback: "CN",
    },
  ];
  return (
    <footer className="container">
      <section className=" flex justify-between">
        <div className="max-w-80 space-y-6">
          <div className="relative aspect-[16/4]">
            <Image
              alt="logo"
              fill
              src={"/logo-navbar.png"}
              className="h-full"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dui lacus purus commodo
            lacus amet et.
          </p>
          <p><span className="font-bold">Phone:</span> +91 6969696969</p>
          <a href="mailto:admin@cybernaut.co.in">
            <p><span className="font-bold">Email:</span> admin@cybernaut.co.in</p>
          </a>
          <div className="flex gap-8">
            {footerAvatars.map((avatar, i) => (
              <div key={i}>
                <Avatar>
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                  <AvatarFallback>{avatar.fallback}</AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </section>
      <div className="mt-10 text-xs text-muted-foreground">
        <p className="absolute -translate-x-1/2 left-1/2 ">www.cybernaut.co.in</p>
        <p className="absolute right-10">All Rights Reserved to Cybernaut Edu-Tech LLP</p>
      </div>
    </footer>
  );
};

export default Footer;
