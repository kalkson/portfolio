import React, { useEffect } from 'react';
import styled from 'styled-components';
import Headline from '../components/atoms/Headline/Headline';
import ContactForm from '../components/organisms/ContactForm/ContactForm';
import device from '../style/breakpoints';

const StyledParagraph = styled.p`
  font-size: 1.8rem;
  width: 100%;
  color: var(--secondaryColor);

  @media ${device.laptopM} {
    width: 500px;
    margin-left: 75px;
    margin-top: 20px;
  }
`;
const ContactPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--primaryColor', '#ae63d6');
  });

  return (
    <>
      <Headline>Contact</Headline>
      <StyledParagraph>
        If you wanna contact with me to ask about something or begin our teamwork, just write here. I will respond the
        fastest I can.
      </StyledParagraph>
      <ContactForm />
    </>
  );
};

export default ContactPage;
