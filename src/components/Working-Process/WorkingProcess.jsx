import React from 'react';
import processOne from '../../assets/process_1.png';
import processTwo from '../../assets/process_2.png';
import processThree from '../../assets/process_3.png';
import processFour from '../../assets/process_4.png';
import curvedArrowUp from '../../assets/curved-arrow-up.png';
import curvedArrowDown from '../../assets/curved-arrow-down.png';

const WorkingProcess = () => {
  return (
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
            Organically grown crops tend use natural fertilizers like manure to
            improve growth to plant .
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
            Organically grown crops tend use natural fertilizers like manure to
            improve growth to plant .
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
            Organically grown crops tend use natural fertilizers like manure to
            improve growth to plant .
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
            Organically grown crops tend use natural fertilizers like manure to
            improve growth to plant .
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
