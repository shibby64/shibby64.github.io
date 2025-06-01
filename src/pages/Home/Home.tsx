import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <div className="text-title title">Home page</div>
      </section>
      <section className="content-row">
        <div className="card" id="explanation">
          <div className="text-section-header header">Welcome to my site!</div>
          <div className="text-body content">There isn't much here yet, but feel free to check out my blog!</div>
        </div>
      </section>
    </>
  );
};

export default Home;
