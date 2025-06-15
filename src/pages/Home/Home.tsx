import React from "react";
import Tile from "../../components/containers/Tile";
import LinkButton from "../../components/buttons/LinkButton";
import ContentCollection from "../../components/containers/ContentCollection";
import Text from "../../components/Text";
import Card from "../../components/containers/Card";
import Embed from "../../components/widgets/Embed";
import { FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <>
      <ContentCollection type="column">
        <ContentCollection type="row">
          <Tile className="title">
            <Text textType="title" style={{ color: "var(--white)", textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)" }}>
              Hello!
            </Text>
          </Tile>
        </ContentCollection>
        <ContentCollection type="row">
          <ContentCollection type="column">
            <Card header="Notice">
              <Text>
                Welcome to my website! Sorry, there isn't much here yet. Eventually my blog will fill up with some
                longer-form posts where I shout into the void about whatever's on my mind, but right now it's just a
                couple test posts. Visit it if you want!
              </Text>
              <div style={{ display: "flex", justifyContent: "center", padding: "var(--spacing-large)" }}>
                <LinkButton buttonClass="mystic" linkTo="/blog">
                  Take me there <FaArrowRight />
                </LinkButton>
              </div>
            </Card>
            <Card header="How it feels to post on this website">
              <img
                src="/assets/images/wall-talking.gif"
                alt="Blog post illustration"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Card>
          </ContentCollection>

          <Card header="Songs I'm currently listening to">
            <Embed
              style={{ height: "470px" }}
              innerHTML={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/11LS1CJ0T90U4seq6fdbPy?utm_source=generator&theme=0" width="100%" height="470" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
            />
          </Card>
        </ContentCollection>
      </ContentCollection>
    </>
  );
};

export default Home;
