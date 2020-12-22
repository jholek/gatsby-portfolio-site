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
      feedbackMsg: 'Success!',
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
            name='message'
            value={message}
            label='Message'
            placeholder='Enter a message...'
            onChange={(e) => onTextInput(e)}
            required
          />
        </div>
        <div>{feedbackMsg}</div>
        <button
          className='btn btn__primary summary__cta--button'
          type='submit'
          form='Contact Form'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
