import React, { useState } from 'react';
import axios from 'axios';
import * as qs from 'query-string';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    feedbackMsg: '',
  });

  const { email, subject, message, feedbackMsg } = formData;

  const onTextInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const axiosOptions = {
      url: '/',
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(formData),
    };
    console.log(axiosOptions);

    axios(axiosOptions)
      .then(() => {
        setFormData({
          email: '',
          subject: '',
          message: '',
          feedbackMsg: 'Message submitted successfully!',
        });
      })
      .catch((err) => {
        setFormData({
          feedbackMsg:
            'There was a problem submitting your message. Please email me at jeff.holek@gmail.com',
        });
      });
  };

  return (
    <div className='contact__form'>
      <form
        name='contact-form'
        id='contact-form'
        method='POST'
        data-netlify='true'
        onSubmit={(e) => onSubmit(e)}
      >
        <input type='hidden' name='contact-form' value='contact-form' />
        <div>
          <input
            className='form__input'
            type='email'
            name='email'
            value={email}
            label='Email'
            placeholder='Email'
            onChange={(e) => onTextInput(e)}
            required
          />
        </div>
        <div>
          <input
            className='form__input'
            type='text'
            name='subject'
            value={subject}
            label='Subject'
            placeholder='Subject'
            onChange={(e) => onTextInput(e)}
            required
          />
        </div>
        <div>
          <textarea
            className='form__input form__message'
            name='message'
            value={message}
            label='Message'
            placeholder='Enter a message...'
            onChange={(e) => onTextInput(e)}
            required
          />
        </div>
        <div className='contact__feedback'>{feedbackMsg}</div>
        <div className='summary__cta push'>
          <button
            className='btn btn__primary summary__cta--button'
            type='submit'
            form='contact-form'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
