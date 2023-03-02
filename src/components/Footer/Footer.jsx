import React from 'react';
import {
  FaChevronUp,
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaPinterest,
  FaCalendar,
} from 'react-icons/fa';
import blogPost from '../../assets/blog1.jpg';
import { useGlobalContext } from '../../context/Context';

const Footer = () => {
  const { showNavbar } = useGlobalContext();

  return (
    <footer>
      <div className='top'>
        <div className='item one'>
          <div className='logo'>Spring Food</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            cumque ab possimus eligendi sapiente aspernatur eius veniam placeat,
            excepturi aliquid.
          </p>
          <div className='socials'>
            <FaFacebookF className='icon' />
            <FaTwitter className='icon' />
            <FaBehance className='icon' />
            <FaInstagram className='icon' />
            <FaPinterest className='icon' />
          </div>
        </div>

        <div className='item two'>
          <h4>Quick Link</h4>
          <ul>
            <li>Help and Ordering</li>
            <li>Return & Cancellation</li>
            <li>Online Organic Service</li>
            <li>Delevery Schedule</li>
            <li>Online Organic Service</li>
          </ul>
        </div>

        <div className='item three'>
          <h4>Latest Articles</h4>
          <div className='article'>
            <div className='img'>
              <img src={blogPost} alt='blog post' />
            </div>
            <div className='info'>
              <div className='date'>
                <FaCalendar className='icon' />
                <p>March 14, 2019</p>
              </div>
              <div className='title'>
                <p>How to Eat Organic Foods</p>
              </div>
            </div>
          </div>
          <div className='article'>
            <div className='img'>
              <img src={blogPost} alt='blog post' />
            </div>
            <div className='info'>
              <div className='date'>
                <FaCalendar className='icon' />
                <p>March 14, 2019</p>
              </div>
              <div className='title'>
                <p>How to Eat Organic Foods</p>
              </div>
            </div>
          </div>
        </div>

        <div className='item four'>
          <h4>Newsletter</h4>
          <p>Subscribe our newsletter to get more update & join to fuodborne</p>
          <input type='text' placeholder='Email address' />
          <button className='green'>Subscribe</button>
        </div>
      </div>
      <div className='bottom'>
        <p className='copyright'>
          2019 © Copyright Fuodborne. All Rights Reserved.
        </p>
        <div className={`back-to-top ${showNavbar ? `hide` : null}`}>
          <FaChevronUp className='icon' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
