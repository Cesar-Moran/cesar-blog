import { Link } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import { ArrowBigDown } from "lucide-react";
import { useRef } from "react";
import BlogCard from "../components/BlogCard";

export default function Homepage() {
  const scrollToAboutSection = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (scrollToAboutSection.current) {
      scrollToAboutSection.current.scrollIntoView();
    }
  };

  return (
    <main>
      <section className=" flex flex-col lg:mt-48 items-center   container pb-28">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around ">
          <div className="space-y-4">
            <h1 className="text-7xl font-bold font-serif">
              Cesar <span className="text-green-600">A.</span> Morán
            </h1>

            <Separator />
            <p className="max-w-xl text-lg tracking-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              reprehenderit sequi, sunt deserunt fuga dignissimos asperiores
              ratione. Omnis voluptas nisi iure! Ut ex ipsa nesciunt quidem odio
              assumenda ab necessitatibus?
            </p>
            <p className="max-w-xl text-lg tracking-normal text-gray-600 font-semibold">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium optio ratione porro dolores consequuntur nisi,
              voluptates.
            </p>

            <p className="max-w-xl text-lg tracking-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium optio ratione porro dolores consequuntur nisi,
              voluptates pariatur amet dolorem voluptatum reprehenderit officia
              accusamus, alias fuga possimus corrupti. Tenetur, ratione numquam.
            </p>
          </div>
          <div>
            {" "}
            <img
              src="https://cimoranblog.files.wordpress.com/2023/12/365999457_2257268687802577_7251403533503537681_n.jpg"
              alt=""
              className="rounded-full self-center "
            />
          </div>
        </div>

        <ArrowBigDown
          onClick={executeScroll}
          className="mt-28 animate-bounce cursor-pointer"
        />
      </section>
      <Separator ref={scrollToAboutSection} className="mt-0 mb-48" />
      <section className="container flex justify-center items-center w-full ">
        <div className=" p-8 space-y-4 backdrop-blur   rounded-lg   border border-gray-400 dark:border-gray-50 bg-white/5  shadow-lg">
          <h1 className="uppercase text-2xl font-semibold text-blue-500 font-serif">
            About me
          </h1>
          <p className="max-w-xl text-md tracking-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            reprehenderit sequi, sunt deserunt fuga dignissimos asperiores
            ratione. Omnis voluptas nisi iure! Ut ex ipsa nesciunt quidem odio
            assumenda ab necessitatibus?
          </p>
          <p className="max-w-xl text-md tracking-normal">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            optio ratione porro dolores consequuntur nisi, voluptates pariatur
            amet dolorem voluptatum reprehenderit officia accusamus, alias fuga
            possimus corrupti. Tenetur, ratione numquam.
          </p>

          <p className="max-w-xl text-md tracking-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            optio ratione porro dolores consequuntur nisi, voluptates pariatur
            amet dolorem voluptatum reprehenderit officia accusamus, alias fuga
            possimus corrupti. Tenetur, ratione numquam.
          </p>
        </div>
      </section>

      <Separator className="mt-48 " />
      <section className="min-h-screen container flex flex-col gap-8 justify-center items-center py-24">
        <h1 className="text-5xl font-bold font-serif self-start ">Blogs</h1>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </main>
  );
}
