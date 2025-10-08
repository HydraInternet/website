import { useState } from "react";
import Markdown from "react-markdown";

import contentUri from "./about.md";

export default function AboutPage() {
  const [content, setContent] = useState<string | null>(null);

  if (!content) {
    fetch(contentUri)
      .then((res) => res.text())
      .then((text) => setContent(text));
    return <div>Loading...</div>;
  }

  return (
    <div className="grow max-w-[800px] mx-auto">
      <article className="prose prose-sm max-w-full mt-4 mx-4">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}
