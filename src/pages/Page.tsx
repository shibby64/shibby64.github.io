import React, { ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <main>
      <div className="container page">{children}</div>
    </main>
  );
};

export default Page;
