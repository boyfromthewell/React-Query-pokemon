import React from "react";
import styled from "styled-components";
import Pica from "../../images/pica.gif";
function Loading() {
  return (
    <MainBox>
      <LoadingIMG src={Pica} alt="loading" />
      <LoadingSpan>Loading...</LoadingSpan>
    </MainBox>
  );
}
const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoadingIMG = styled.img`
  width: 10%;
  height: 70px;
`;
const LoadingSpan = styled.span`
  font-weight: 600;
`;
export default Loading;
