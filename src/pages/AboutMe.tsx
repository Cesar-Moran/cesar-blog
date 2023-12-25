export default function AboutMe() {
  return (
    <section className="container flex justify-center items-center w-full ">
      <h1 className=" uppercase absolute  cursor-default -left-20  lg:-left-28  -rotate-90 text-5xl lg:text-6xl border-b-2 ">
        About me
      </h1>
      <div className=" p-8 space-y-4 backdrop-blur   rounded-lg   border border-gray-400 dark:border-gray-50 bg-white/5  shadow-lg">
        <h1 className="text-4xl font-semibold text-blue-500 font-serif">
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
  );
}
