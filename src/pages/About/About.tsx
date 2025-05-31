import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section id="about-me">
        <div className="text-title">About Me</div>
        <div className="text-body">my name jeff</div>
      </section>
      <section id="about-me">
        <div className="text-title">Why did I create this?</div>
        <div className="text-body">
          The internet is not what i remember it being. Instead of being a place for benefit of the user, it's becoming
          a place for the benefit of the corporation. Companies like Meta, Twitter, and others will do anything to keep
          you scrolling, clicking, and engaging with their content. Their platforms are designed with addictive
          algorithms, crammed with as many advertisements as they can get away with, and are slowly filling with AI
          slop. The {}
          <a href="https://en.wikipedia.org/wiki/Dead_Internet_theory" target="_blank" rel="noreferrer">
            dead internet theory
          </a>{" "}
          {}
          is alive and well. {}
          <b>I do not wish to engage with this "new internet" and have been working to unplug myself.</b>
        </div>
      </section>
    </>
  );
};

export default About;
