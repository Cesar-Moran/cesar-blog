import { Separator } from "../components/ui/separator";
import { ArrowBigDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BlogCard from "../components/BlogCard";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";

type Post = {
  id: string;
  title: string;
  short_description: string;
  tags: string[];
  imageUrl: string;
};

export default function Homepage() {
  const scrollToAboutSection = useRef<HTMLDivElement>(null);

  const [posts, setPosts] = useState<Post[]>([]);

  const executeScroll = () => {
    if (scrollToAboutSection.current) {
      scrollToAboutSection.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const displayAllPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/getPosts");

      const data = await response.json();

      setPosts(data);
    } catch (error) {
      return console.log("There was an error" + error);
    }
  };

  useEffect(() => {
    displayAllPosts();
  }, []);

  return (
    <main>
      <h1 className="uppercase absolute cursor-default -left-12 top-44 md:top-40 lg:top-80 -rotate-90 text-6xl border-b-2 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
        Start
      </h1>

      <section className=" flex flex-col lg:mt-48 items-center relative    container pb-28">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around flex-wrap ">
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
          className="mt-28 animate-bounce cursor-pointer  "
        />
      </section>
      <Separator ref={scrollToAboutSection} className="mt-0 mb-48" />
      <AboutMe />
      <Separator className="mt-48 " />
      <section className="min-h-screen container flex flex-col gap-8 justify-center items-center py-24">
        <h1 className="text-6xl font-medium font-serif self-start ">
          Some of my work
        </h1>
        {posts.map((post) => (
          <Link to={`/post/${post.id}`}>
            <BlogCard
              key={post.id}
              title={post.title}
              tags={post.tags}
              short_description={post.short_description}
              imageUrl={post.imageUrl}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
