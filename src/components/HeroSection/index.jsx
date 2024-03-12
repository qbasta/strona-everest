import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <img alt="" src="src/images/logo3.svg" width="400" height="160" />
        <HeroP>
          {" "}
          Profesjonalna obsługa rachunkowa, podatkowa oraz kadrowo-płacowa dla
          jednostek działających w sferze zadań publicznych oraz innych
          podmiotów gospodarczych.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="ture"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Dowiedz się więcej {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
