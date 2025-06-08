import React from "react";
import postsIndex from "../../blog_posts/index.json";
import { Link } from "react-router";
import { Outlet } from "react-router";

const MAX_POSTS_TO_SHOW = 10; // Limit the number of posts shown

const Blog: React.FC = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-small)" }}>
        {
          /* Render the blog post list */
          postsIndex.posts
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post, idx) => {
              if (idx > MAX_POSTS_TO_SHOW) {
                return null;
              }
              return <Link to={post.route}>{post.title}</Link>;
            })
        }
      </div>

      <Outlet />
    </div>
  );
};

export default Blog;
