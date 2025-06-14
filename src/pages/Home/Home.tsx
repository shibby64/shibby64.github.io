import React from "react";
import Tile from "../../components/containers/Tile";
import LinkButton from "../../components/buttons/LinkButton";
import ContentCollection from "../../components/containers/ContentCollection";
import Text from "../../components/Text";
import Card from "../../components/containers/Card";

const Home: React.FC = () => {
  return (
    <>
      <ContentCollection type="column">
        <ContentCollection type="row">
          <Tile className="title gradient-bg animated">
            <Text textType="title">Welcome!</Text>
          </Tile>
        </ContentCollection>
        <ContentCollection type="row">
          <Card header="notice">
            <Text>There isn't much here yet, but feel free to check out my blog!</Text>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--spacing-large)" }}>
              <LinkButton buttonClass="mystic" linkTo="/blog">
                Take me there
              </LinkButton>
            </div>
          </Card>
        </ContentCollection>
      </ContentCollection>
    </>
  );
};

export default Home;
