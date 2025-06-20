import React from "react";
import Card from "../../../components/containers/Card";
import Embed from "../../../components/widgets/Embed";

const latest =
  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1918534025%3Fsecret_token%3Ds-eUI80JWKr1K&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vitalityedm" title="Ethan Harris" target="_blank" style="color: #cccccc; text-decoration: none;">Ethan Harris</a> · <a href="https://soundcloud.com/vitalityedm/outrunner/s-eUI80JWKr1K" title="Outrunner" target="_blank" style="color: #cccccc; text-decoration: none;">Outrunner</a></div>';

const Music: React.FC = () => (
  <>
    <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.5rem", marginBottom: "20px" }}>
      🚧 Under Construction 🚧
    </div>
    <Card header="Latest track on soundcloud">
      <Embed innerHTML={latest} />
    </Card>
  </>
);

export default Music;
