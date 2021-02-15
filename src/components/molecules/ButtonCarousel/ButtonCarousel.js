import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import StyledButtonCarousel from './ButtonCarousel.styled';
import CarouselButton from '../../atoms/CarouselButton/CarouselButton';
import ArrowImage from '../../../assets/icons/carousel-arrow.svg';

const tileTypes = ['skills', 'purpose', 'aboutme'];

const ButtonCarousel = ({ setActiveTile }) => {
  const carousel = useRef(null);
  const [rotate, setRotate] = useState(-120);
  const [activeOne, setActive] = useState(1);
  const [isAddnotationVisible, setAddnotationVisibility] = useState(true);

  const handleClick = () => {
    setAddnotationVisibility(false);

    setRotate(rotate - 120);
    carousel.current.style.transform = `rotate(${rotate}deg)`;

    if (activeOne === 3) setActive(1);
    else setActive(activeOne + 1);

    setActiveTile(tileTypes[activeOne - 1]);
  };

  return (
    <StyledButtonCarousel
      ref={carousel}
      className="carousel"
      onClick={() => handleClick()}
      isAddnotationVisible={isAddnotationVisible}
    >
      <CarouselButton active={activeOne === 1} activeNumber={1}>
        about me
      </CarouselButton>
      <CarouselButton active={activeOne === 2} activeNumber={2}>
        skills
      </CarouselButton>
      <CarouselButton active={activeOne === 3} activeNumber={3}>
        my purpose
      </CarouselButton>
      <span className="carousel__point" />
      <ArrowImage className="carousel__arrow" />
      <span className="carousel__addnotation">Click here!</span>
    </StyledButtonCarousel>
  );
};

ButtonCarousel.propTypes = {
  setActiveTile: propTypes.bool.isRequired,
};

export default ButtonCarousel;
