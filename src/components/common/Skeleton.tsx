import React from "react";
import styled from "styled-components";
import SkeletonElement from "../SkeletonElement";
import Shimmer from "./Shimmer";

function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonProfile>
        <Shimmer />
        <SkeletonElement type="main-image" />
        <div
          style={{
            display: "flex",
            width: "30%",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SkeletonElement type="sub-image" />
          <SkeletonElement type="sub-image" />
        </div>
      </SkeletonProfile>
      <SkeletonText>
        <SkeletonElement type="main-text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </SkeletonText>
    </SkeletonContainer>
  );
}

export default Skeleton;

const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75vh;
`;
const SkeletonProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  width: 70%;
  max-width: 750px;
  margin-bottom: 3vh;
  height: 50vh;
  border-radius: 12px;
`;

const SkeletonText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  width: 70%;
  max-width: 750px;
  height: 20vh;
  border-radius: 12px;
`;
