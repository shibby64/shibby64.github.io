import React, { useState } from "react";

interface BlogPostWrapperProps {
  title: string;
  expandedByDefault?: boolean;
  children: React.ReactNode;
}

const BlogPostWrapper: React.FC<BlogPostWrapperProps> = ({ title, children, expandedByDefault = false }) => {
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

export default BlogPostWrapper;
