import React from "react";

const BlogPost20250530: React.FC = () => {
  return (
    <>
      <h1>Blog Post Title</h1>
      <p>Date: May 30, 2025</p>
      <section>
        <p>This is a sample blog post content for May 30, 2025. It includes an audio clip of drums.</p>
        <audio controls>
          <source src="/assets/audio/drums.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>
    </>
  );
};

export default BlogPost20250530;
