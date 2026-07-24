import React from "react";

export type Tchildern = {
  children: React.ReactNode;
};

export default function Container({ children }: Tchildern) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
