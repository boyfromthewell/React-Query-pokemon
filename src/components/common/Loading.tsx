import React from "react";
import styled from "styled-components";
import Pica from "../../images/pica.gif";

interface LoadingProps {
  status: string;
}
function Loading({ status }: LoadingProps) {
  return (
    <MainBox status={status}>
      <LoadingIMG src={Pica} alt="loading" />
      <LoadingSpan>Loading...</LoadingSpan>
    </MainBox>
  );
}
const MainBox = styled.div<{ status: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${(props) => (props.status === "home" ? "" : "70vh")};
`;
const LoadingIMG = styled.img`
  width: 10%;
  height: 70px;
`;
const LoadingSpan = styled.span`
  font-weight: 600;
`;
export default Loading;
