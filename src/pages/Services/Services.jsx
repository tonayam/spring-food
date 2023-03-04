import React, { useEffect } from 'react';
import PageHeader from '../../components/Page-Header/PageHeader';
import { useGlobalContext } from '../../context/Context';
import ServicesWeOffer from '../../components/Services-We-Offer/ServicesWeOffer';

const Services = () => {
  const { resetPage } = useGlobalContext();

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  return (
    <main className='services-page'>
      <PageHeader pageTitle='Our Services' />
      <ServicesWeOffer sliceNum={6} />
    </main>
  );
};

export default Services;
