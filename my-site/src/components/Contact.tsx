import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSejfCqDnLaV2e-lNrLJEpJUS73GZErR-aqLGYYawM18ic4b4w/formResponse';
    
    const formBody = new URLSearchParams({
      'entry.1788718639': formData.name,
      'entry.1407920698': formData.email,
      'entry.913598796': formData.phone,
      'entry.2054596564': formData.message
    });

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors'
      });
      setPopupMessage("Thank you for reaching out! Your message has been sent successfully. ❤️");
      setIsError(false);
      setShowPopup(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setPopupMessage('Something went wrong. Please try again.');
      setIsError(true);
      setShowPopup(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container" >
      <div className='form-pixel-character'>
        <img src={`${process.env.PUBLIC_URL}/images/contact/julie-sittingonform.gif`} alt="Pixel character sitting on the form"/>
      </div>
      <h1>Contact Me</h1>
      <p>Have a question or want to work together?</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        <div>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            title="Please enter a valid phone number (123-456-7890)"
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write message here..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit' }}
          />
        </div>

        <button type="submit">
          Send Message
        </button>
      </form>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className={`popup ${isError ? 'error' : 'success'}`} onClick={(e) => e.stopPropagation()}>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;