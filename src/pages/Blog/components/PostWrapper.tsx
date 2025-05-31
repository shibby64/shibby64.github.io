import React, { useState } from "react";

interface PostWrapperProps {
  title: string;
  path: string;
  expandedByDefault?: boolean;
  children: React.ReactNode;
}

const PostWrapper: React.FC<PostWrapperProps> = ({ title, path, expandedByDefault = false, children }) => {
  const [isExpanded, setIsExpanded] = useState(expandedByDefault);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="post-container drop-shadow">
      <div className="header">
        {title} <button onClick={toggleExpand}>Show/hide</button>
      </div>
      <div className={`transition-wrapper ${isExpanded ? "" : "collapsed"}`}>
        <div className="content">{children}</div>
      </div>
    </article>
  );
};

export default PostWrapper;
