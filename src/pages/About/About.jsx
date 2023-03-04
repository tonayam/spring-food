import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import PageHeader from '../../components/Page-Header/PageHeader';
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import farmerOne from '../../assets/farmer-1.jpg';
import processOne from '../../assets/process_1.png';
import processTwo from '../../assets/process_2.png';
import processThree from '../../assets/process_3.png';
import processFour from '../../assets/process_4.png';
import curvedArrowUp from '../../assets/curved-arrow-up.png';
import curvedArrowDown from '../../assets/curved-arrow-down.png';
import customer1 from '../../assets/customer1.jpg';
import customer2 from '../../assets/customer2.jpg';
import customer3 from '../../assets/customer3.jpg';
import customer4 from '../../assets/customer4.jpg';
import { reviews } from '../../data';
import OrganicFood from '../../components/Organic-Food/OrganicFood';
import WorkingProcess from '../../components/Working-Process/WorkingProcess';

const About = () => {
  const { resetPage } = useGlobalContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  const handlePrevSlide = () => {
    if (index < 1) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNextSlide = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 6000);

    if (index > reviews.length - 1) {
      setIndex(0);
    }

    return () => clearInterval(interval);
  }, [index]);

  return (
    <main className='about-page'>
      <PageHeader pageTitle='About Us' />
      <OrganicFood />

      {/* OUR TEAM SECTION */}
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

      {/* WORKING PROCESS SECTION */}
      <WorkingProcess />

      {/* CUSTOMER REVIEWS SECTION */}
      <section className='customer-reviews'>
        <h6>Client Satisfait</h6>
        <h2>What Client's Say</h2>
        <div className='cont'>
          <div className='color-mix'>
            <span className='first'></span>
            <span className='second'></span>
          </div>
        </div>
        <div className='container'>
          <div className='customers'>
            <img src={customer1} alt='customer' />
            <img src={customer2} alt='customer' />
            <img src={customer3} alt='customer' />
            <img src={customer4} alt='customer' />
          </div>
          <div className='reviews-cont'>
            <div className='reviews'>
              {reviews.map((review, reviewIndex) => {
                const { customerName, image, text, occupation } = review;
                let position = `nextSlide`;

                if (reviewIndex === index) {
                  position = `activeSlide`;
                }

                if (
                  reviewIndex === index - 1 ||
                  (index > reviews.length - 1 && index < 1)
                ) {
                  position = `prevSlide`;
                }

                return (
                  <div className={`review ${position}`} key={reviewIndex}>
                    <p>{text}</p>
                    <div className='customer'>
                      <div className='img'>
                        <img src={image} alt='customer name' />
                      </div>
                      <div className='info'>
                        <h5>{customerName}</h5>
                        <p>{occupation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='nav-btns'>
              <FaArrowLeft onClick={handlePrevSlide} />
              <FaArrowRight onClick={handleNextSlide} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
