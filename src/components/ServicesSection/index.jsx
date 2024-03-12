import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./ServicesElements";

const ServicesSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description1,
  description2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <Heading lightText={lightText}>{headline}</Heading>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ServicesSection;
