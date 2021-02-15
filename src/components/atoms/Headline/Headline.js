import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import StyledHeadline from './Headline.styled';

const Headline = ({ children, className }) => {
  const headline = useRef(null);

  const updateShadow = e => {
    const centerY = headline.current.clientHeight / 2 + headline.current.offsetTop;
    const centerX = headline.current.clientWidth / 2 + headline.current.offsetLeft;
    const offsetY = e.clientY - centerY;
    const offsetX = e.clientX - centerX;

    headline.current.style['text-shadow'] = `${offsetX / 55}px ${offsetY / 55}px 0 var(--primaryColor)`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateShadow);

    return () => {
      document.removeEventListener('mousemove', updateShadow);
    };
  }, []);

  return (
    <StyledHeadline clasSame={className} ref={headline}>
      {children}
    </StyledHeadline>
  );
};

Headline.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

Headline.defaultProps = {
  className: null,
};

export default Headline;
