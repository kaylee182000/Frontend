import React from "react";

interface authLayoutProps {
  children: React.ReactNode;
}

const authLayout: React.FC<authLayoutProps> = ({ children }) => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        {children}
      </div>
    </div>
  );
};

export default authLayout;
