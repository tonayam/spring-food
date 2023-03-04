import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { services } from '../../data';
import FloatingImage1 from '../../assets/services-animation-image1.png';
import FloatingImage2 from '../../assets/services-animation-image2.png';
import FloatingImage3 from '../../assets/services-animation-image3.png';
import FloatingImage4 from '../../assets/services-animation-image4.png';

const ServicesWeOffer = ({ sliceNum }) => {
  return (
    <section className='services-we-offer'>
      <h6>What We Offer</h6>
      <h2>Service We Offer</h2>
      <div className='cont'>
        <div className='color-mix'>
          <span className='first'></span>
          <span className='second'></span>
        </div>
      </div>

      <div className='container'>
        {services.slice(0, sliceNum).map((service, serviceIndex) => {
          const { desc, image, name } = service;
          return (
            <div className='service' key={serviceIndex}>
              <div className='img'>
                <LazyLoadImage src={image} alt={name} />
              </div>
              <div className='info'>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
              <div className='container'>
                <div className='arrow'>
                  <FaArrowRight />
                </div>
                <div className='line'></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='floating-images'>
        <img src={FloatingImage1} alt='floating' />
        <img src={FloatingImage2} alt='floating' />
        <img src={FloatingImage3} alt='floating' />
        <img src={FloatingImage4} alt='floating' />
      </div>
    </section>
  );
};

export default ServicesWeOffer;
