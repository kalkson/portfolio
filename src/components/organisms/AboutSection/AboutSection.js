import React from "react";
import StyledAboutSection from "./AboutSection.styled";
import Headline from "../../atoms/Headline/Headline";
import ButtonCarousel from "../../molecules/ButtonCarousel/ButtonCarousel";

const AboutSection = () => (
  <StyledAboutSection className="about">
    <div className="about__header">
      <span className="about__header__notice">Damian Kalka&apos;s</span>
      <Headline>Portfolio</Headline>
    </div>
    <ButtonCarousel />
  </StyledAboutSection>
);

export default AboutSection;
