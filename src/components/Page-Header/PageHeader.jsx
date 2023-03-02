import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ pageTitle }) => {
  return (
    <header className='page-header'>
      <h1>{pageTitle}</h1>
      <div className='link'>
        <Link>Home</Link>
        <p>&#62; {pageTitle}</p>
      </div>
    </header>
  );
};

export default PageHeader;
