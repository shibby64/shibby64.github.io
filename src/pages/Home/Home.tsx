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
          <Tile className="title gradient-bg animated">
            <Text textType="title">Hello!</Text>
          </Tile>
        </ContentCollection>
        <ContentCollection type="row">
          <Card header="notice">
            <Text>There isn't much here yet, but feel free to check out my blog!</Text>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--spacing-large)" }}>
              <LinkButton buttonClass="mystic" linkTo="/blog">
                Take me there <FaArrowRight />
              </LinkButton>
            </div>
          </Card>
          <Card header="Songs In Rotation 🎵">
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
