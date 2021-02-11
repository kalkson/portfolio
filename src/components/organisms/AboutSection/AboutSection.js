import React, { useState } from "react";
import StyledAboutSection from "./AboutSection.styled";
import Headline from "../../atoms/Headline/Headline";
import ButtonCarousel from "../../molecules/ButtonCarousel/ButtonCarousel";
import AboutTile from "../../molecules/AboutTile/AboutTile";
import GithubIcon from "../../../assets/icons/github.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";

const AboutSection = () => {
  const [activeTile, setActiveTile] = useState("aboutme");

  return (
    <StyledAboutSection className="about">
      <div className="about__header">
        <span className="about__header__notice">Damian Kalka&apos;s</span>
        <Headline>Portfolio</Headline>
      </div>
      <div className="about__wrapper">
        <ButtonCarousel setActiveTile={setActiveTile} />
        {activeTile === "aboutme" && (
          <AboutTile headline="Who am I?">
            <div className="about__tile__content__text">
              My name is Damian and I design websites. Not at the moment
              seriously. However, I am learning seriously. In my path I chose
              React. I want to become a total master in it and make it designing
              anything on the internet will be nothing for me obstacle. I
              believe that for this I will need more than just sitting alone at
              the monitor screen, reading documentation, looking for solutions
              late at night on stack overflow, or watching courses.
              <br />
              <br />
              I would like to find a job as a junior. In part, this is also the
              portfolio arose. Here you will find my projects - the larger and
              smaller ones with a detailed description of what the project is
              for and what tools are used was built. Moreover, you can preview
              the code if (almost) every project on GitHub and check it my
              skills. Check out this portfolio code here.
              <br />
              <br />
              In my work I do not limit myself to "the right ones." solutions. I
              am open to many ways and looking for the best solutions.
            </div>
            <div className="about__tile__content__icons">
              <a href="https://github.com/kalkson">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/damian-kalka/">
                <LinkedinIcon />
              </a>
            </div>
          </AboutTile>
        )}
        {activeTile === "skills" && (
          <AboutTile headline="Skills">
            <div className="about__tile__content__text">
              My name is Damian and I design websites. Not at the moment
              seriously. However, I am learning seriously. In my path I chose
              React. I want to become a total master in it and make it designing
              anything on the internet will be nothing for me obstacle. I
              believe that for this I will need more than just sitting alone at
              the monitor screen, reading documentation, looking for solutions
              late at night on stack overflow, or watching courses.
              <br />
              <br />
              I would like to find a job as a junior. In part, this is also the
              portfolio arose. Here you will find my projects - the larger and
              smaller ones with a detailed description of what the project is
              for and what tools are used was built. Moreover, you can preview
              the code if (almost) every project on GitHub and check it my
              skills. Check out this portfolio code here.
              <br />
              <br />
              In my work I do not limit myself to "the right ones." solutions. I
              am open to many ways and looking for the best solutions.
            </div>
            <div className="about__tile__content__icons">
              <a href="https://github.com/kalkson">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/damian-kalka/">
                <LinkedinIcon />
              </a>
            </div>
          </AboutTile>
        )}
        {activeTile === "purpose" && (
          <AboutTile headline="Purpose">
            <div className="about__tile__content__text">
              My name is Damian and I design websites. Not at the moment
              seriously. However, I am learning seriously. In my path I chose
              React. I want to become a total master in it and make it designing
              anything on the internet will be nothing for me obstacle. I
              believe that for this I will need more than just sitting alone at
              the monitor screen, reading documentation, looking for solutions
              late at night on stack overflow, or watching courses.
              <br />
              <br />
              I would like to find a job as a junior. In part, this is also the
              portfolio arose. Here you will find my projects - the larger and
              smaller ones with a detailed description of what the project is
              for and what tools are used was built. Moreover, you can preview
              the code if (almost) every project on GitHub and check it my
              skills. Check out this portfolio code here.
              <br />
              <br />
              In my work I do not limit myself to "the right ones." solutions. I
              am open to many ways and looking for the best solutions.
            </div>
            <div className="about__tile__content__icons">
              <a href="https://github.com/kalkson">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/damian-kalka/">
                <LinkedinIcon />
              </a>
            </div>
          </AboutTile>
        )}
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
