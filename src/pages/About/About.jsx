import React from 'react';
import PageHeader from '../../components/Page-Header/PageHeader';
import aboutHero from '../../assets/about-hero.jpg';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import farmerOne from '../../assets/farmer-1.jpg';
import processOne from '../../assets/process_1.png';
import processTwo from '../../assets/process_2.png';
import processThree from '../../assets/process_3.png';
import processFour from '../../assets/process_4.png';
import curvedArrowUp from '../../assets/curved-arrow-up.png';
import curvedArrowDown from '../../assets/curved-arrow-down.png';

const About = () => {
  return (
    <main className='about-page'>
      <PageHeader pageTitle='About Us' />
      <section className='intro'>
        <div className='hero'>
          <img src={aboutHero} alt='a woman arranging her vegetables' />
        </div>
        <div className='info'>
          <h6>Welcome To Our Fuodborne Farms</h6>
          <h2>Organic Food - Farm Fresh Produce Right To Your Door</h2>
          <div className='color-mix'>
            <span className='first'></span>
            <span className='second'></span>
          </div>
          <h4>Natural Products</h4>
          <p>
            Organically grown crops tend to use natural fertilizers like manure
            to improve plant growth. Animals raised organically are also not
            given antibiotic organic hormones most commonly purchased organic .
          </p>
          <div className='underline'></div>
          <h4>Wheat Cultivation</h4>
          <p>
            Organically grown crops tend to use natural fertilizers like manure
            to improve plant growth. Animals raised organically are also not
            given antibiotic organic hormones most commonly purchased organic .
          </p>
        </div>
      </section>

      <section className='our-team'>
        <h6>Our Team Mamber</h6>
        <h2>Meet Our Farmers</h2>
        <div className='cont'>
          <div className='color-mix'>
            <span className='first'></span>
            <span className='second'></span>
          </div>
        </div>
        <div className='team'>
          <div className='card'>
            <div className='img'>
              <img src={farmerOne} alt='a farmer name farmer' />
            </div>
            <h4>Ben Stcoks</h4>
            <p>Food Farmer</p>
            <div className='socials'>
              <div className='icon'>
                <FaFacebookF />
              </div>
              <div className='icon'>
                <FaTwitter />
              </div>
              <div className='icon'>
                <FaYoutube />
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='img'>
              <img src={farmerOne} alt='a farmer name farmer' />
            </div>
            <h4>Ben Stcoks</h4>
            <p>Food Farmer</p>
            <div className='socials'>
              <div className='icon'>
                <FaFacebookF />
              </div>
              <div className='icon'>
                <FaTwitter />
              </div>
              <div className='icon'>
                <FaYoutube />
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='img'>
              <img src={farmerOne} alt='a farmer name farmer' />
            </div>
            <h4>Ben Stcoks</h4>
            <p>Food Farmer</p>
            <div className='socials'>
              <div className='icon'>
                <FaFacebookF />
              </div>
              <div className='icon'>
                <FaTwitter />
              </div>
              <div className='icon'>
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='working-process'>
        <h6>Working Process</h6>
        <h2>How Does We Work</h2>
        <div className='cont'>
          <div className='color-mix'>
            <span className='first'></span>
            <span className='second'></span>
          </div>
        </div>
        <div className='process'>
          <div className='step'>
            <div className='img'>
              <img src={processOne} alt='first step' />
              <p>01</p>
            </div>
            <h3>Step 01</h3>
            <p>
              Organically grown crops tend use natural fertilizers like manure
              to improve growth to plant .
            </p>
            <img
              src={curvedArrowDown}
              alt='direction arrow'
              className='curved-arrow'
            />
          </div>

          <div className='step'>
            <div className='img'>
              <img src={processTwo} alt='first step' />
              <p>02</p>
            </div>
            <h3>Step 02</h3>
            <p>
              Organically grown crops tend use natural fertilizers like manure
              to improve growth to plant .
            </p>
            <img
              src={curvedArrowUp}
              alt='direction arrow'
              className='curved-arrow'
            />
          </div>

          <div className='step'>
            <div className='img'>
              <img src={processThree} alt='first step' />
              <p>03</p>
            </div>
            <h3>Step 03</h3>
            <p>
              Organically grown crops tend use natural fertilizers like manure
              to improve growth to plant .
            </p>
            <img
              src={curvedArrowDown}
              alt='direction arrow'
              className='curved-arrow down'
            />
          </div>

          <div className='step'>
            <div className='img'>
              <img src={processFour} alt='first step' />
              <p>04</p>
            </div>
            <h3>Step 04</h3>
            <p>
              Organically grown crops tend use natural fertilizers like manure
              to improve growth to plant .
            </p>
          </div>
        </div>
      </section>

      <section className='customer-reviews'></section>
    </main>
  );
};

export default About;
