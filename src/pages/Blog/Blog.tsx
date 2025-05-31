import React from "react";
import * as All from "./BlogPosts";

const Blog: React.FC = () => {
  console.log(Object.keys(All));
  return (
    <div>
      <div className="text-title title">Blog</div>
      {
        /* Render all blog posts */
        Object.keys(All)
          .sort((a, b) => b.localeCompare(a))
          .map((key) => {
            const BlogPostComponent = All[key as keyof typeof All];
            return <BlogPostComponent key={key} />;
          })
      }
    </div>
  );
};

export default Blog;
