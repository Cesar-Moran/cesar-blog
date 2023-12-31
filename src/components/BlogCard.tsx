import { Badge } from "../components/ui/badge";
import { CardContent, Card } from "../components/ui/card";

type BlogCardProps = {
  title: string;
  short_description: string;
  tags: string[];
  imageUrl: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  tags,
  short_description,
  imageUrl,
}) => {
  return (
    <Card className="max-w-sm mx-auto  hover:shadow-blue-400   hover:via-60% hover:via-[#0e101500] hover:to-[#30a6f525]  bg-white dark:bg-black/10 cursor-pointer  rounded-xl shadow-sm overflow-hidden md:max-w-5xl p-7 backdrop-blur  hover:bg-gradient-to-r  hover:from-transparent  dark:hover:shadow-green-900  dark:hover:via-60% dark:hover:via-[#0e101500] dark:hover:to-[#4ade8025]  transition-all duration-500">
      <CardContent className="md:flex p-0 flex-row">
        <img
          src={imageUrl}
          alt="Blog Image"
          className="w-[448px] h-[252px] rounded-lg object-cover object-left"
        />
        <div className="flex flex-col p-7 space-y-4">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                className="backdrop-blur bg-blue-500/90 dark:!bg-green-500/50 !text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className="text-xl text-blue-500 font-semibold ">{title}</h2>
          <p className="text-gray-400">{short_description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
