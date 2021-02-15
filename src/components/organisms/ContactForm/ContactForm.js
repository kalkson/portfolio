import gsap from 'gsap/gsap-core';
import React, { useRef, useEffect } from 'react';
import StyledContactForm from './ContactForm.styled';

const ContactForm = () => {
  const email = useRef(null);
  const message = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(message.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    timeline.fromTo(email.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    timeline.fromTo(button.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });

    timeline.play();
  });

  function encode(data) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        email: event.target.getAttribute('email'),
        message: event.target.getAttribute('message'),
      }),
    })
      .then(() => alert('Dzięki!'))
      .catch(error => alert(error));
  };

  return (
    <StyledContactForm
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={() => handleSubmit()}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="email" ref={email}>
        Your e-mail
        <input name="email" id="email" type="email" className="contact-form__email" />
      </label>
      <label htmlFor="message" ref={message}>
        Your message
        <textarea name="message" id="message" className="contact-form__message" />
      </label>
      <button type="submit" className="contact-form__button" ref={button}>
        Send it &gt;
      </button>
    </StyledContactForm>
  );
};

export default ContactForm;
