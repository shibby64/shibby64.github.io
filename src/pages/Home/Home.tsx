import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <div className="text-title"></div>
      </section>
      <section className="content-box" id="explanation">
        <div className="text-section-header header">Welcome to my site!</div>
        <div className="text-body body">There isn't much here yet, but feel free to check out my blog!</div>
      </section>
    </>
  );
};

export default Home;
