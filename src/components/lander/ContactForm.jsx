import React, { useState } from 'react';

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
    console.log('Submitted');
    setFormData({
      email: '',
      subject: '',
      message: '',
      feedbackMsg: 'Message sent successfully!',
    });
  };

  return (
    <div className='contact__form'>
      <form
        name='Contact Form'
        id='Contact Form'
        method='POST'
        data-netlify='true'
        onSubmit={(e) => onSubmit(e)}
      >
        <input type='hidden' name='form-name' value='Contact Form' />
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
            form='Contact Form'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
