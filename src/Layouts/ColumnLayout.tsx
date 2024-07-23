import React from "react";
import LayoutHeader from "./LayoutHeader";

const LayoutHOC = (WrappedComponents: React.ComponentType<any>[]) => {
  return () => {
    return (
      <>
        <LayoutHeader />
        {WrappedComponents.map((Component, index) => (
          <div key={index} className="lg:flex">
            <Component />
          </div>
        ))}
      </>
    );
  };
};

export default LayoutHOC;
