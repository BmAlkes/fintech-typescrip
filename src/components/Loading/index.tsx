import React from "react";
import { DotLoader } from "react-spinners";

const style: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
};

export const Loading = () => {
  return (
    <div style={style}>
      <DotLoader color="#463220" />
    </div>
  );
};
