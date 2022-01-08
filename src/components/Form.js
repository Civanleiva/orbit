import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // TODO: Change strings to actual values
    emailjs.sendForm('service_id', 'template_id', form.current, 'user_id')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className="input-container">
      <label>Name</label>
      <input type="text" name="user_name" />
    </div>

    <div className="input-container">
      <label>Email</label>
      <input type="text" name="user_email" />
    </div>

    <div className="input-container">
      <label>Subject</label>
      <input type="text" name="user_subject" />
    </div>

    <div className="input-container">
      <label>Your Message</label>
      <textarea type="text" name="user_message" />
    </div>

    <div className="button-container">
      <input type="submit" value="SEND MESSAGE" />
    </div>
    </form>
  );
};

export default Form;

