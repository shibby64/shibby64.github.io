import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="content-row" id="about">
        <div className="card" id="about-me">
          <div className="text-title header">About Me</div>
          <div className="text-body content">my name jeff</div>
        </div>
      </div>

      <div className="card" id="about-me">
        <div className="text-section-header header">Why did I create this?</div>
        <div className="text-body content">
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
      </div>
    </>
  );
};

export default About;
