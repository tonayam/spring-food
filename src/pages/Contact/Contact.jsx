import React, { useEffect } from 'react';
import PageHeader from '../../components/Page-Header/PageHeader';
import { FiHome } from 'react-icons/fi';
import { useGlobalContext } from '../../context/Context';

const Contact = () => {
  const { resetPage } = useGlobalContext();

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  return (
    <main className='contact-page'>
      <PageHeader pageTitle='Contact us' />
      <section className='get-in-touch'>
        <h5>Get In Touch</h5>
        <h2>Send Us Message</h2>
        <div className='cont'>
          <div className='color-mix'>
            <span className='first'></span>
            <span className='second'></span>
          </div>
        </div>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.92330546046!2d6.3487374144469415!3d4.9524117408032335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a012c0f8b0785%3A0x83605f68d766139e!2sAstrosoft%20Group%20Limited!5e0!3m2!1sen!2sng!4v1677847403063!5m2!1sen!2sng'
            title='our loction'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='contact'>
          <form action=''>
            <div className='row'>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
            </div>
            <input type='tel' placeholder='Phone Number' />
            <textarea placeholder='Your Message'></textarea>
            <button type='submit' className='green'>
              Send Message
            </button>
          </form>

          <div className='info'>
            <h3>Hello there got a project?</h3>

            <div className='option'>
              <div className='icon'>
                <FiHome />
              </div>
              <div className='details'>
                <h6>Company Address :</h6>
                <p>3567 New Alaska, us</p>
              </div>
            </div>

            <div className='option'>
              <div className='icon'>
                <FiHome />
              </div>
              <div className='details'>
                <h6>Email Address :</h6>
                <p>support@springfood.com</p>
              </div>
            </div>

            <div className='option'>
              <div className='icon'>
                <FiHome />
              </div>
              <div className='details'>
                <h6>Contact Us :</h6>
                <p>+2349055423446</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
