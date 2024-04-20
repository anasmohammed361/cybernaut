import React, { type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart, Home, MoveUp, PieChart } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const NavBarItemsMenu = () => {
  return (
    <div className="flex w-full justify-start  p-8  md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? "font-bold" : ""
      }`}
    >
      <span>{children}</span>
      <MoveUp
        className={`h-4 w-4 transition-transform  duration-500 ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)]  rounded-lg  border  bg-white  p-1"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className=" overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-max"
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-white bg-white"
    />
  );
};

const Products = () => {
  return (
    <div className="w-full">
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Startup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Invoicing
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Reviews
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Tax/VAT
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            More
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <ArrowRight />
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <Home className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Startup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <BarChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Scaleup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <PieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Enterprise</span>
      </a>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <ArrowRight />
      </button>
    </div>
  );
};

function Organization() {
  return (
    <div className="flex justify-between">
      <Card className="w-max max-w-screen-md p-1">
        <div className="flex justify-between gap-6 p-8">
          <SingleOrganization />
          <SingleOrganization />
          <SingleOrganization />
        </div>
        <div className="flex w-full items-center justify-evenly rounded-b-sm bg-[#eff3f9] p-2">
          <div className="flex items-center gap-2">
            <Image
              src={"https://picsum.photos/10"}
              width={20}
              height={20}
              className="h-6 w-6 rounded-full"
              alt="logo"
            />
            <p className="text ">Career</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"https://picsum.photos/10"}
              width={20}
              height={20}
              className="h-6 w-6 rounded-full"
              alt="logo"
            />
            <p className="text-muted-foreground ">Career</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"https://picsum.photos/10"}
              width={20}
              height={20}
              className="h-6 w-6 rounded-full"
              alt="logo"
            />
            <p className="text-muted-foreground ">Career</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
const SingleOrganization = () => {
  return (
    <div className="flex items-start gap-6">
      <Image
        src={"https://picsum.photos/200"}
        height={40}
        alt="img"
        width={40}
        className="aspect-square h-28 w-28 grow-0 rounded-md"
      />
      <div className="space-y-3">
        <h4 className="text-sm">About Us</h4>
        <p className="text-xs">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!
        </p>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <Card className="flex max-w-screen-lg gap-6 p-3">
      <SingleProgram />
      <SingleProgram />
      <SingleProgram />
    </Card>
  );
};
const SingleProgram = () => {
  return (
    <div className="flex gap-6">
      <div className="relative w-[12rem]">
        <Image
          src={"https://picsum.photos/200"}
          fill
          alt="img"
          className="  rounded-md"
        />
      </div>

      <div className="basis-1/2 space-y-3  text-[0.6rem]">
        <h4 className="text-sm">Tech Trio</h4>
        <p className="text-[0.7rem]">Lorem, ipsum dolor sit</p>
        <div className="grid grid-cols-2 gap-1 gap-x-2">
          <Button variant={"outline"} size={"sm"} className="text-xs">
            Lorem.
          </Button>
          <Button variant={"outline"} size={"sm"} className="text-xs">
            Lorem{" "}
          </Button>
          <Button variant={"outline"} size={"sm"} className="text-xs">
            Lorem
          </Button>
          <Button variant={"outline"} size={"sm"} className="text-xs">
            Lorem
          </Button>
          <div
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              }),
              "col-span-2 mt-2 flex gap-2 overflow-ellipsis rounded-full p-0",
            )}
          >
            <button className="h-full w-full basis-1/2  rounded-full bg-[#d9d9d9] px-2 text-[0.6rem]">
              Buy Me :)
            </button>

            <button className=" basis-1/2 overflow-x-clip py-2 text-[0.6rem]">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConactUs = () => {
  const routes: {
    title: string;
    link: string;
    image: string;
  }[] = [
    {
      title: "Support",
      link: "#",
      image: "https://picsum.photos/200",
    },
    {
      title: "Careers",
      link: "#",
      image: "https://picsum.photos/200",
    },
    {
      title: "Testimonials",
      link: "#",
      image: "https://picsum.photos/200",
    },
    {
      title: "Partner with us",
      link: "#",
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <Card className="flex min-w-[50rem]  items-center justify-around gap-4 px-8 py-2">
      {routes.map((route, i) => (
        <a href={route.link} key={i} className="">
          <div className="flex items-center gap-3">
            <Avatar className="aspect-square h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="">{route.title}</p>
          </div>
        </a>
      ))}
    </Card>
  );
};

const Automation = () => {
  const automations: {
    title: string;
    content: string;
    image: string;
  }[] = [
    {
      title: "Automation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Automation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Automation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Automation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Automation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Automation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <Card className="grid grid-cols-3 gap-6 p-6">
      {automations.map((automation, i) => (
        <div key={i} className="flex max-w-64 gap-4">
          <div className="relative aspect-square size-28">
            <Image
              src={automation.image}
              alt="img"
              fill={true}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{automation.title}</h4>
            <p className="text-xs">{automation.content}</p>
          </div>
        </div>
      ))}
    </Card>
  );
};
const Resources = () => {
  const resources: { title: string; content: string; image: string }[] = [
    {
      title: "Blog",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Blog",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Blog",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <Card className="flex min-w-[40rem] gap-10 px-8 py-10">
      <section className="flex basis-[70%] flex-col gap-8 ">
        {resources.map((resource, i) => (
          <div key={i} className="flex gap-4">
            <div>
              <Avatar className="aspect-square size-14">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">{resource.title}</h4>
              <p className="text-xs">{resource.content}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="basis-[30%]">
        <div className="relative h-full w-full object-contain">
          <Image
            src={"https://picsum.photos/300"}
            alt="img"
            fill={true}
            className="aspect-[3/4] h-full w-96 rounded-xl object-cover "
          />
        </div>
      </section>
    </Card>
  );
};

const Services = () => {
  const services: {
    title: string;
    content: string;
    image: string;
  }[] = [
    {
      title: "Mou program",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Mou program",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Mou program",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
  ];
  const courses: {
    title: string;
    content: string;
    image: string;
  }[] = [
    {
      title: "Mou program",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Mou program",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
    {
      title: "Mou program",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quas!",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <section className="flex max-w-screen-lg gap-1">
      <Card className="flex basis-[35%] flex-col gap-6 justify-around rounded-r-none p-4">
        {services.map((service, i) => (
          <div key={i} className="flex gap-4">
            <div>
              <Avatar className="aspect-square size-14">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <h4 className="font-semibold">{service.title}</h4>
              <p className="text-xs">{service.content}</p>
            </div>
          </div>
        ))}
      </Card>
      <Card className="flex justify-around basis-[65%] gap-3 rounded-l-none p-4">
        {courses.map((course, i) => (
          <div key={i} className="flex flex-col gap-6 min-h-72 max-w-40">
            <div className="relative grow ">
              <Image
                src={course.image}
                alt="img"
                fill={true}
                className="rounded-xl  object-cover"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">{course.title}</h4>
              <p className="text-xs">{course.content}</p>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
};
const TABS = [
  {
    title: "Organization",
    Component: Organization,
  },
  {
    title: "Programs",
    Component: Programs,
  },
  {
    title: "Services",
    Component: Services,
  },
  {
    title: "Our Automation",
    Component: Automation,
  },
  {
    title: "Resources",
    Component: Resources,
  },
  {
    title: "Contact Us",
    Component: ConactUs,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
