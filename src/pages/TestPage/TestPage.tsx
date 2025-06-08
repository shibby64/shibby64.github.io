import React from "react";
import Tile from "../../components/containers/Tile";
import LinkButton from "../../components/buttons/LinkButton";
import Card from "../../components/containers/Card";
import LinkText from "../../components/LinkText";

const TestPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Tile>
        <div>
          {"This is a test tile component. "}
          <LinkText href="/#/test" openExternal>
            This is an emphasized external link
          </LinkText>
          {" and "}
          <LinkText href="/#/test">This is an emphasized link</LinkText>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", gap: "1rem" }}>
            <LinkButton buttonClass="primary" linkTo="/test">
              Primary button
            </LinkButton>
            <LinkButton buttonClass="secondary" linkTo="/test">
              Secondary button
            </LinkButton>
            <LinkButton buttonClass="warning" linkTo="/test">
              Warning button
            </LinkButton>
          </div>
        </div>
      </Tile>

      <Tile showAccentBar>
        <div>This is a test tile component with an accent bar.</div>
      </Tile>

      <Card headerText="Card - static">
        <div>
          This is a test card component. It is used to demonstrate the basic structure of a card component.
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", gap: "1rem" }}></div>
        </div>
      </Card>

      {/* <Card headerText="Card - collapsable">
        <div>
          This is a test card component with collapse functionality. It is used to demonstrate the basic structure of a
          card component with collapse functionality.
        </div>
      </Card> */}
    </div>
  );
};

export default TestPage;
