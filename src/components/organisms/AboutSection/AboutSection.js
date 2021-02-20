import React, { useState } from 'react';
import StyledAboutSection from './AboutSection.styled';
import Headline from '../../atoms/Headline/Headline';
import ButtonCarousel from '../../molecules/ButtonCarousel/ButtonCarousel';
import AboutTile from '../../molecules/AboutTile/AboutTile';
import GithubIcon from '../../../assets/icons/github.svg';
import LinkedinIcon from '../../../assets/icons/linkedin.svg';
import SkillElement from '../../atoms/SkillElement/SkillElement';

import HTMLIcon from '../../../assets/icons/html.svg';
import CSSIcon from '../../../assets/icons/css.svg';
import JSIcon from '../../../assets/icons/js.svg';
import SassIcon from '../../../assets/icons/sass.svg';
import ReactSVG from '../../../assets/icons/react-icon.svg';
import ReduxIcon from '../../../assets/icons/redux.svg';
import WebpackIcon from '../../../assets/icons/webpack.svg';
import GatsbyIcon from '../../../assets/icons/gatsby.svg';
import GraphqlIcon from '../../../assets/icons/graphql.svg';
import FirebaseIcon from '../../../assets/icons/firebase.svg';
import AdobexdIcon from '../../../assets/icons/adobexd.svg';
import VscIcon from '../../../assets/icons/vsc.svg';
import GitIcon from '../../../assets/icons/git.svg';
import BootstrapIcon from '../../../assets/icons/bootstrap.svg';

const AboutSection = () => {
  const [activeTile, setActiveTile] = useState('aboutme');

  return (
    <StyledAboutSection className="about">
      <div className="about__header">
        <span className="about__header__notice">Damian Kalka&apos;s</span>
        <Headline>Portfolio</Headline>
      </div>
      <div className="about__wrapper">
        <ButtonCarousel setActiveTile={setActiveTile} />
        {activeTile === 'aboutme' && (
          <AboutTile headline="Who am I?">
            <div className="about__tile__content__text">
              My name is Damian and I design websites. Not at the moment seriously. However, I am learning seriously. In
              my path I chose React. I want to become a total master in it and make it designing anything on the
              internet will be nothing for me obstacle. I believe that for this I will need more than just sitting alone
              at the monitor screen, reading documentation, looking for solutions late at night on stack overflow, or
              watching courses.
              <br />
              <br />
              I would like to find a job as a junior. In part, this is also the portfolio arose. Here you will find my
              projects - the larger and smaller ones with a detailed description of what the project is for and what
              tools are used was built. Moreover, you can preview the code in (almost) every project on GitHub and check
              it my skills. Check out this portfolio code here.
              <br />
              <br />
              In my work I do not limit myself to &quot;the right ones.&quot; solutions. I am open to many ways and
              looking for the best solutions.
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
        {activeTile === 'skills' && (
          <AboutTile headline="My tech stack">
            <div className="about__tile__content__text">
              <div className="about__tile__content__text__icons-wrapper">
                <SkillElement>
                  <HTMLIcon /> HTML
                </SkillElement>
                <SkillElement>
                  <CSSIcon /> CSS
                </SkillElement>
                <SkillElement>
                  <JSIcon /> JS
                </SkillElement>
                <SkillElement>
                  <SassIcon /> Sass
                </SkillElement>
                <SkillElement>
                  <ReactSVG /> React
                </SkillElement>
                <SkillElement>
                  <ReduxIcon /> Redux
                </SkillElement>
                <SkillElement>
                  <WebpackIcon /> webpack
                </SkillElement>
                <SkillElement>
                  <GatsbyIcon /> Gatsby
                </SkillElement>
                <SkillElement>
                  <GraphqlIcon /> GraphQL
                </SkillElement>
                <SkillElement>
                  <FirebaseIcon /> Firebase
                </SkillElement>
                <SkillElement>
                  <AdobexdIcon /> Adobe XD
                </SkillElement>
                <SkillElement>
                  <VscIcon /> VSCode
                </SkillElement>
                <SkillElement>
                  <GitIcon /> git
                </SkillElement>
                <SkillElement>
                  <BootstrapIcon /> Bootstrap
                </SkillElement>
              </div>
              Except that I&apos;m aknowledge about technologies such as: node, npm, REST API, Figma, react-testing
              (basics)
            </div>
          </AboutTile>
        )}
        {activeTile === 'purpose' && (
          <AboutTile headline="Purpose">
            <div className="about__tile__content__text no-flex">
              I became fascinated with the world of the frontend a long time ago, when I was still a child. Looking at
              beautifully designed websites and wondering how they were created, I subconsciously dreamed of creating
              them as well. Recently, however, I devote myself one hundred percent to this.
              <br />
              <br />
              I would like to make such a great invention as the Internet a better place. So that the users visiting it
              could feel like participants of something amazing and modern at the same time.
              <br />
              <br />
              In my projects I try to use many technologies, not expecting &quot;the only correct&quot; tool. Because it
              is not the tools that determine how the code will be written.
              <br />
              <br />
              Privately, I write a blog about web development and programming in general. If you want to read more about
              my approach, please come <a href="https://reactywny.pl">here</a>.
            </div>
          </AboutTile>
        )}
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
