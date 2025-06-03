import React from "react";
import postsIndex from "../../blog_posts/index.json";
import PostWrapper from "./components/PostWrapper";

const MAX_POSTS_TO_SHOW = 10; // Limit the number of posts shown

const Blog: React.FC = () => {
  return (
    <div>
      <div className="text-title title">Blog</div>
      {
        /* Render the blog post list */
        postsIndex.posts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post, idx) => {
            if (idx >= MAX_POSTS_TO_SHOW) return null; // Limit the number of posts shown
            const postContent = require(`../../blog_posts/posts/${post.filename}`);
            return (
              <PostWrapper title={post.title} path={post.slug} key={post.slug}>
                <postContent.default />
              </PostWrapper>
            );
          })
      }
    </div>
  );
};

export default Blog;
