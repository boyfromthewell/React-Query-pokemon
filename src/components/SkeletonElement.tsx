import React from "react";
import "../style/skeletons.css";

interface SkeletonProps {
  type: string;
}
function SkeletonElement({ type }: SkeletonProps) {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}

export default SkeletonElement;
