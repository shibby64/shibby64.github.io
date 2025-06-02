import React from "react";
import Tile from "../../components/containers/Tile";
import LinkButton from "../../components/buttons/LinkButton";

const TestPage: React.FC = () => {
  return (
    <div>
      <Tile headerText="Welcome!">
        <div>
          There isn't much here yet, but feel free to check out my blog!
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <LinkButton className="primary" linkTo="/blog">
              Take me there
            </LinkButton>
          </div>
        </div>
      </Tile>
      <div style={{ padding: "10px" }} />

      <div className="card" id="about-me">
        <div className="text-section-header header">Why did I create this?</div>
        <div className="text-body content">
          The internet is not what i remember it being. Instead of being a place for benefit of the user, it's becoming
          a place for the benefit of the corporation. Companies like Meta, Twitter, and others will do anything to keep
          you scrolling, clicking, and engaging with their content. Their platforms are designed with addictive
          algorithms, crammed with as many advertisements as they can get away with, and are slowly filling with AI
          slop. The {}
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
        </div>
      </div>

      <div style={{ padding: "10px" }} />
      <LinkButton className="secondary" linkTo="/about">
        secondary button
      </LinkButton>
      <LinkButton className="warning" linkTo="/about">
        Warning button
      </LinkButton>
    </div>
  );
};

export default TestPage;
