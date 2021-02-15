import React from 'react';
import StyledContactForm from './ContactForm.styled';

const ContactForm = () => {
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
      <label htmlFor="email">
        Your e-mail
        <input name="email" id="email" type="email" className="contact-form__email" />
      </label>
      <label htmlFor="message">
        Your message
        <textarea name="message" id="message" className="contact-form__message" />
      </label>
      <button type="submit" className="contact-form__button">
        Send it &gt;
      </button>
    </StyledContactForm>
  );
};

export default ContactForm;
