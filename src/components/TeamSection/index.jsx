import React from "react";
import {
  InfoContainer,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgContainer,
  Img,
  Card,
} from "./TeamElements";

const TeamSection = ({ teamMembers }) => {
  return (
    <InfoContainer id={"team"}>
      {teamMembers.map((member, index) => (
        <Card key={index}>
          <ImgContainer>
            <Img src={member.image} alt={member.name} />
          </ImgContainer>
          <TextWrapper>
            <Heading>{member.name}</Heading>
            <TopLine>{member.role}</TopLine>
            <Subtitle>{member.description}</Subtitle>
          </TextWrapper>
        </Card>
      ))}
    </InfoContainer>
  );
};

export default TeamSection;
