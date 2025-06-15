import React from "react";
import Tile from "../../components/containers/Tile";
import LinkButton from "../../components/buttons/LinkButton";
import Card from "../../components/containers/Card";
import LinkText from "../../components/LinkText";
import Text from "../../components/Text";

const TestPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Tile>
        <Text textType="body">
          {"This is a test tile component. "}
          <LinkText href="/#/test" openExternal>
            This is an emphasized external link
          </LinkText>
          {" and "}
          <LinkText href="/#/test">this is an emphasized link.</LinkText>
        </Text>
        <Text textType="body" className="gradient-text">
          {" "}
          This is gradient text.
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem", gap: "1rem" }}>
          <LinkButton buttonClass="mystic" linkTo="/test">
            Mystic button
          </LinkButton>
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
      </Tile>

      <Tile showAccentBar>
        <Text textType="body">This is a test tile component with an accent bar.</Text>
      </Tile>

      <Card header="Card - static">
        <div>
          This is a test card component. It is used to demonstrate the basic structure of a card component.
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", gap: "1rem" }}></div>
        </div>
      </Card>

      <div
        style={{
          display: "flex",
          height: "150px",
          borderRadius: 16,
          overflow: "hidden",
          outline: "3px solid black",
          boxShadow: "0 0 18px white",
        }}>
        <div style={{ flex: 1, backgroundColor: "var(--black)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--grey-0)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--grey-20)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--grey-40)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--grey-60)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--grey-80)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--grey-100)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--white)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--fire-dark)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--fire-mid)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--fire-light)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--mystic-dark)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--mystic-mid)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--mystic-light)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--water-dark)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--water-mid)" }}></div>
        <div style={{ flex: 1, backgroundColor: "var(--water-light)" }}></div>
      </div>

      <div
        style={{
          width: "100%",
          height: "150px",
        }}
        className="gradient-bg animated">
        Gradient (animated)
      </div>

      <div
        style={{
          width: "100%",
          height: "150px",
        }}
        className="gradient-bg">
        Gradient
      </div>

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
