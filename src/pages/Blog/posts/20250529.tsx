import React from "react";
import BlogPostWrapper from "../../../components/blog/BlogPostWrapper";
import image from "../../../static/assets/images/DSC02275-HDR.jpg"; // Adjust the path as necessary

const BlogPost20250529: React.FC = () => {
  return (
    <BlogPostWrapper title="Blog Post Title">
      <h1>Blog Post Title</h1>
      <p>Date: May 29, 2025</p>
      <section>
        <img src={image} alt="Blog post illustration" style={{ maxWidth: "400px", height: "auto" }} />
      </section>
    </BlogPostWrapper>
  );
};

export default BlogPost20250529;
