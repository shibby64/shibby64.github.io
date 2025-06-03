import React from "react";
import Tile from "../../components/containers/Tile";
import LinkButton from "../../components/buttons/LinkButton";

const Home: React.FC = () => {
  return (
    <>
      <section className="content-row">
        <Tile>
          <div className="text-section-header">Welcome!</div>
          <div className="text-body">
            There isn't much here yet, but feel free to check out my blog!
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <LinkButton className="primary" linkTo="/blog">
                Take me there
              </LinkButton>
            </div>
          </div>
        </Tile>
      </section>
    </>
  );
};

export default Home;
