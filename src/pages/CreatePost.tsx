import { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;

export default function CreatePost() {
  const [markdown, setMarkdown] = useState(mdStr);
  console.log(markdown);

  return (
    <section className="py-28 max-w-5xl rounded mx-auto min-h-screen">
      <form action="">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border w-full rounded-lg"
        />

        <MarkdownEditor
          value={mdStr}
          height="400px"
          className="my-8"
          onChange={(value, viewUpdate) => setMarkdown(value)}
        />
      </form>
    </section>
  );
}
