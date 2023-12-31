import { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;

export default function CreatePost() {
  const [description, setMarkdown] = useState(mdStr);
  console.log(description);
  const [short_description, setShortDescription] = useState("");
  console.log(short_description);
  const [title, setTitle] = useState("");

  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [image, setProductImage] = useState<File | null>(null);

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleShortDescriptionChange = (e: any) => {
    setShortDescription(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("short_description", short_description);

    tags.forEach((tag, index) => {
      if (tag !== undefined) {
        formData.append(`tags[${index}]`, tag);
      }
    });

    image && formData.append("image", image);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    const response = await fetch("http://localhost:4000/api/createPost", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Post created successfully");
      toast.success("Post has been created", {
        action: {
          label: "Go to blogs",
          onClick: () => console.log("Go to blogs"),
        },
      });
    } else {
      toast.error("Oops! There was a problem :(");
    }
  };

  const addTag = () => {
    if (tag.trim() !== "") {
      setTags([...tags, tag.trim()]);
      setTag(""); // Limpiar el campo después de agregar el tag
    }
  };

  return (
    <section className="py-28 max-w-5xl rounded mx-auto min-h-screen">
      <Toaster />
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          onChange={handleTitleChange}
          className="p-2 border w-full rounded-lg text-black"
        />
        <input
          type="file"
          placeholder="Image"
          accept="image/*"
          onChange={(event) => {
            if (event.target.files && event.target.files.length > 0) {
              setProductImage(event.target.files[0]);
            }
          }}
        />
        <textarea
          placeholder="Title"
          onChange={handleShortDescriptionChange}
          className="p-2 border w-full rounded-lg text-black"
        />

        <input
          className="p-2 border w-full rounded-lg text-black"
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <button onClick={addTag} type="button">
          Add tag
        </button>

        <ul className=" w-full rounded-lg h-24 space-x-2">
          {Array.isArray(tags) &&
            tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </ul>
        <MarkdownEditor
          height="400px"
          className="my-8"
          onChange={(value) => setMarkdown(value)}
        />

        <Button type="submit">Create post</Button>
      </form>
    </section>
  );
}
