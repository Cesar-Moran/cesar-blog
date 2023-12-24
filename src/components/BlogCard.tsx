import { Badge } from "../components/ui/badge";
import { CardContent, Card } from "../components/ui/card";

export default function BlogCard() {
  return (
    <Card className="max-w-sm mx-auto bg-white dark:bg-transparent rounded-xl shadow-md overflow-hidden md:max-w-7xl p-7  hover:bg-gradient-to-r  hover:from-transparent  dark:hover:shadow-green-900  hover:via-60% hover:via-[#0e101500] hover:to-[#4ade8025]  transition-all duration-500">
      <CardContent className="md:flex p-0 flex-row">
        <img
          src="https://www.gabrielvalles.dev/_next/image?url=%2Fplano-cartesiano.png&w=1920&q=75&dpl=dpl_BS4wAqsEgLFmSJHtjGfJt4qBK91R"
          alt=""
          className="w-[448px] h-[252px] rounded-lg"
        />
        <div className="flex flex-col p-7 space-y-4">
          <div className="flex gap-4">
            {" "}
            <Badge className="backdrop-blur bg-blue-500/90 dark:!bg-green-500/50 !text-white">
              React
            </Badge>
            <Badge className="backdrop-blur bg-blue-500/90 dark:!bg-green-500/50 !text-white">
              Typescript
            </Badge>
            <Badge className="backdrop-blur bg-blue-500/90 dark:!bg-green-500/50 !text-white">
              Tailwind
            </Badge>
          </div>
          <h2 className="text-xl text-blue-500 font-bold">Lorem Ipsum Dolor</h2>
          <p className="text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat id,
            quisquam non est odio corrupti nam delectus magnam tempore error,
            quidem repudiandae, qui rem quia sapiente. Natus inventore
            voluptatibus ipsum?
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
