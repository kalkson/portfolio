import React, { useRef, useState } from "react";
import StyledButtonCarousel from "./ButtonCarousel.styled";
import CarouselButton from "../../atoms/CarouselButton/CarouselButton";

const ButtonCarousel = () => {
  const carousel = useRef(null);
  const [rotate, setRotate] = useState(-120);
  const [activeOne, setActive] = useState(1);

  const handleClick = () => {
    setRotate(rotate - 120);
    carousel.current.style.transform = `rotate(${rotate}deg)`;

    if (activeOne === 3) setActive(1);
    else setActive(activeOne + 1);
  };

  return (
    <StyledButtonCarousel
      ref={carousel}
      className="carousel"
      onClick={() => handleClick()}
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
    </StyledButtonCarousel>
  );
};

export default ButtonCarousel;