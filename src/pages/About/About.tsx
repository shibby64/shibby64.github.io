import React from "react";
import Card from "../../components/containers/Card";
import data from "./about.json";
import Embed from "../../components/widgets/Embed";
import ContentCollection from "../../components/containers/ContentCollection";

const About: React.FC = () => {
  return (
    <ContentCollection type="column">
      <ContentCollection type="row">
        <Card header="About Me" id="about-me">
          <>
            <p>
              {
                "Hi, I'm Ethan! I'm a web developer based in western Washington. Outside of web dev, I dabble in a whole host of things: powerlifting, photography, and music production just to name a few."
              }
            </p>
            <br />
            <p>{""}</p>
          </>
        </Card>
      </ContentCollection>
      <ContentCollection type="row">
        <Card header="Songs In Rotation 🎵">
          <Embed
            style={{ height: "470px" }}
            innerHTML={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/11LS1CJ0T90U4seq6fdbPy?utm_source=generator&theme=0" width="100%" height="470" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
          />
        </Card>
        <ContentCollection type="column">
          <Card header="Maxes 🏋️‍♂️">
            <ul>
              {data.maxes.map((lift) => (
                <li>
                  {lift.lift}: {lift.weight}
                </li>
              ))}
            </ul>
          </Card>
          <Card header="Socials">I'll add these later</Card>
        </ContentCollection>
      </ContentCollection>

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
    </ContentCollection>
  );
};

export default About;
