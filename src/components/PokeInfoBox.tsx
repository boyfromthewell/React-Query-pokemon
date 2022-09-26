import React from "react";
import styled from "styled-components";
import { PokeProps } from "../types";

function PokeInfoBox({
  mainImg,
  subImg1,
  subImg2,
  name,
  height,
  weight,
}: PokeProps) {
  return (
    <MainContainer>
      <ImageContainer>
        <MainImage src={mainImg} />
        <SubImageContainer>
          <SubImage src={subImg1} />
          <SubImage src={subImg2} />
        </SubImageContainer>
      </ImageContainer>
      <InfoContainer>
        <Name>Name : {name}</Name>
        <Info>Weight : {weight}</Info>
        <Info>Height : {height}</Info>
      </InfoContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95vh;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  max-width: 750px;
  border: 1px solid gray;
  border-radius: 12px;
  background-color: lightgray;
  box-shadow: 5px 5px 5px gray;
`;
const MainImage = styled.img`
  width: 70%;
`;

const SubImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const SubImage = styled.img``;

const InfoContainer = styled.div`
  display: flex;
  width: 70%;
  max-width: 750px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 12px;
  box-shadow: 5px 5px 5px gray;
  margin-top: 3vh;
  padding: 20px 0 20px 0;
`;

const Name = styled.h1`
  margin-bottom: 3px;
  text-decoration: underline;
  margin-left: 10px;
`;
const Info = styled.p`
  color: gray;
  text-decoration: underline;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
`;
export default PokeInfoBox;
