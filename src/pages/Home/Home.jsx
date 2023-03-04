import React, { useEffect, useState } from 'react';
import { homeHeaders } from '../../data';
import OrganicFood from '../../components/Organic-Food/OrganicFood';
import ServicesWeOffer from '../../components/Services-We-Offer/ServicesWeOffer';
import WorkingProcess from '../../components/Working-Process/WorkingProcess';
import { useGlobalContext } from '../../context/Context';
import heroImage from '../../assets/contact-bg.jpg';
import { MdOutlineQuickreply } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import whyChooseUsHeroImage from '../../assets/why_chose-hero.jpg';

const Home = () => {
  const { resetPage } = useGlobalContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    if (index > homeHeaders.length - 1) {
      setIndex(0);
    }
    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  return (
    <main className='home-page'>
      {/* HEADER SECTION */}
      <header className='header'>
        {homeHeaders.map((slide, slideIndex) => {
          const { image, info, subTitle, title, slideClass } = slide;

          return (
            <div
              className={`${slideClass} ${
                index === slideIndex ? `active` : null
              }`}
              key={slideIndex}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className='text'>
                <div className='cont'>
                  <h4>{subTitle}</h4>
                  <div className='color-mix'>
                    <span className='first'></span>
                    <span className='second'></span>
                  </div>
                </div>
                <h1>{title}</h1>
                <p>{info}</p>
                <button className='green'>Contact Us</button>
              </div>
            </div>
          );
        })}
      </header>

      {/* ORGANIC FOOD SECTION */}
      <OrganicFood />

      {/* SERVICES WE OFFER SECTION*/}
      <ServicesWeOffer sliceNum={3} />

      {/* WORKING PROCESS SECTION */}
      <WorkingProcess />

      {/* WHY CHOOSE US SECTION */}
      <section className='why-choose-us'>
        <div className='hero-image'>
          <img
            src={whyChooseUsHeroImage}
            alt='our customer with one of our farmers'
          />
        </div>
        <div className='info'>
          <h6>What We Do</h6>
          <h2>Why Choose Us</h2>
          <div className='cont'>
            <div className='color-mix'>
              <span className='first'></span>
              <span className='second'></span>
            </div>
          </div>
          <div className='reason'>
            <MdOutlineQuickreply />
            <div className='text'>
              <h3>Quick Response</h3>
              <p>
                Emergency response time is one hour or less guaranteed at live
                person will answer your call or you can enter service
              </p>
            </div>
          </div>
          <div className='reason'>
            <BsLightningCharge />
            <div className='text'>
              <h3>Very Fast Services</h3>
              <p>
                Emergency response time is one hour or less guaranteed at live
                person will answer your call or you can enter service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEND US A MESSAGE SECTION */}
      <section className='send-us-a-message'>
        <h6>Get In Touch</h6>
        <h2>Send Us Message</h2>
        <div className='cont'>
          <div className='color-mix'>
            <span className='first'></span>
            <span className='second'></span>
          </div>
        </div>

        <div className='container'>
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
          <div className='image'>
            <img src={heroImage} alt='hero' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
