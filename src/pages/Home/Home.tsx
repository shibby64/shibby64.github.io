import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="text-title">Welcome to my site!</div>
      <section className="content-box" id="explanation">
        <div className="text-section-header header">Why am I here? What is this about?</div>
        <div className="text-body body"></div>
      </section>
    </>
  );
};

export default Home;
