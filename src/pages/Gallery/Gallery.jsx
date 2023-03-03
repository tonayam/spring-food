import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Page-Header/PageHeader';
import { useGlobalContext } from '../../context/Context';
import { productFilters, allproducts } from '../../data';
import { IoIosResize } from 'react-icons/io';

const Gallery = () => {
  const { resetPage } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState(allproducts);

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  const filterProducts = (e) => {
    const clicked = e.target.textContent;
    if (clicked === `All`) {
      setProducts(allproducts);
    } else {
      const tempProducts = allproducts.filter(
        (product) =>
          product.category.toLocaleLowerCase() === clicked.toLocaleLowerCase()
      );
      setProducts(tempProducts);
    }
  };

  return (
    <main className='gallery-page'>
      <PageHeader pageTitle='Gallery' />
      <section className='special-gallery'>
        <h6>Our Latest Work</h6>
        <h2>Special Gallery</h2>
        <div className='cont'>
          <div className='color-mix'>
            <span className='first'></span>
            <span className='second'></span>
          </div>
        </div>

        <div className='filters'>
          {productFilters.map((filter, filterIndex) => {
            return (
              <button
                key={filterIndex}
                className={index === filterIndex ? `green` : null}
                onClick={(e) => {
                  setIndex(filterIndex);
                  filterProducts(e);
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className='products'>
          {products.map((product, productIndex) => {
            const { category, name, image } = product;
            return (
              <div className='product' key={productIndex}>
                <div className='img'>
                  <img src={image} alt={name} />
                </div>
                <div className='details'>
                  <IoIosResize />
                  <h3>{name}</h3>
                  <p>Category : {category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
