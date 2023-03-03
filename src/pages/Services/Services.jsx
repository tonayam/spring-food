import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PageHeader from '../../components/Page-Header/PageHeader';
import { useGlobalContext } from '../../context/Context';
import { services } from '../../data';

const Services = () => {
  const { resetPage } = useGlobalContext();

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  return (
    <main className='services-page'>
      <PageHeader pageTitle='Our Services' />
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
          {services.map((service, serviceIndex) => {
            const { desc, image, name } = service;
            return (
              <div className='service' key={serviceIndex}>
                <div className='img'>
                  <img src={image} alt={name} />
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
      </section>
    </main>
  );
};

export default Services;
