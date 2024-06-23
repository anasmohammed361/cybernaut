"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {

  NavigationMenuLink,

} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronRight, Search } from "lucide-react";
import { NavBarItemsMenu } from "./NavBarItemsMenu";

const Navbar = () => {
  return (
    <AnimatePresence>
      <motion.nav
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.5 }}
        className="mx-auto flex  h-16 w-full max-w-screen-2xl rounded-xl border-b bg-transparent bg-white bg-opacity-85 shadow-lg ring-1 ring-black/5 backdrop-blur-sm"
      >
        <div className="flex grow items-center justify-between px-8">
          <Link href={"#"} className="">
            {" "}
            <Image
              src={"/logo-navbar.png"}
              width={160}
              height={100}
              alt="logo"
            />
          </Link>

          {/* <div className="flex items-center font-semibold"> */}
           <NavBarItemsMenu />
          {/* </div> */}

          <div className="flex items-center gap-6">
            <Link href={"#"}>
              <Search className="h-6 w-6" />
            </Link>
            <Link href={"#"}>
              <Image height={24} width={24} src={"/svgs/mic.svg"} alt={"mic"} />
            </Link>
            <Button
              className="flex items-center rounded-full"
              variant={"ghost"}
            >
              Dashboard <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

