import React from 'react';
import aboutHero from '../../assets/about-hero.jpg';

const OrganicFood = () => {
  return (
    <section className='organic-food'>
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
          Organically grown crops tend to use natural fertilizers like manure to
          improve plant growth. Animals raised organically are also not given
          antibiotic organic hormones most commonly purchased organic .
        </p>
        <div className='underline'></div>
        <h4>Wheat Cultivation</h4>
        <p>
          Organically grown crops tend to use natural fertilizers like manure to
          improve plant growth. Animals raised organically are also not given
          antibiotic organic hormones most commonly purchased organic .
        </p>
      </div>
    </section>
  );
};

export default OrganicFood;
