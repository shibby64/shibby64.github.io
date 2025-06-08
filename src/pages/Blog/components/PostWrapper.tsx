import React from "react";
import LinkButton from "../../../components/buttons/LinkButton";
import Tile from "../../../components/containers/Tile";
import Text from "../../../components/Text";
import type { postMetadata } from "../../../blog_posts/postMetadata";

interface PostWrapperProps {
  postMetadata: postMetadata;

  // generic props
  children: React.ReactNode;
}

const PostWrapper: React.FC<PostWrapperProps> = (props) => {
  return (
    <div className="blog-post">
      <Tile showAccentBar className="header">
        <Text textType="section-header">{props.postMetadata.title}</Text>
        <LinkButton id="go-back" buttonClass="secondary" linkTo={"/blog"}>
          Go Back
        </LinkButton>
      </Tile>

      <article>{props.children}</article>
    </div>
  );
};

export default PostWrapper;
