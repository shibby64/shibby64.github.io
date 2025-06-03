import React from "react";
import Card from "../../components/containers/Card";

const About: React.FC = () => {
  return (
    <>
      <div className="content-row" id="about">
        <Card headerText="About me" id="about-me">
          my name jeff
        </Card>
      </div>

      {/* <Card id="explanation" headerText="Why this site exists">
        The internet is not what i remember it being. Instead of being a place for benefit of the user, it's becoming a
        place for the benefit of the corporation. Companies like Meta, Twitter, and others will do anything to keep you
        scrolling, clicking, and engaging with their content. Their platforms are designed with addictive algorithms,
        crammed with as many advertisements as they can get away with, and are slowly filling with AI slop. The {}
        <a
          className="emphasized"
          href="https://en.wikipedia.org/wiki/Dead_Internet_theory"
          target="_blank"
          rel="noreferrer">
          dead internet theory
        </a>{" "}
        {}
        is alive and well. {}
        <b>I do not wish to engage with this "new internet" and have been working to unplug myself.</b>
      </Card> */}
    </>
  );
};

export default About;
