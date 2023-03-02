import React from 'react';
import PageHeader from '../../components/Page-Header/PageHeader';
import { FiHome } from 'react-icons/fi';

const Contact = () => {
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
        <div className='map'>map</div>
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
