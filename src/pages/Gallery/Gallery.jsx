import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Page-Header/PageHeader';
import { useGlobalContext } from '../../context/Context';
import { IoIosResize } from 'react-icons/io';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const {
    resetPage,
    products,
    setSelectedProduct,
    showImagesViewer,
    setShowImagesViewer,
  } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  // GET FILTER CATEGORIES
  const productFilters = [...products].reduce(
    (categoriesArr, item) => {
      if (!categoriesArr.includes(item.productCategory)) {
        categoriesArr.push(item.productCategory);
      }

      return categoriesArr;
    },
    ['All']
  );

  const filterProducts = (e) => {
    const clicked = e.target.textContent;

    if (clicked === `All`) {
      setAllProducts(products);
    } else {
      const tempProducts = products.filter((product) => {
        return (
          product.productCategory.toLocaleLowerCase() ===
          clicked.toLocaleLowerCase()
        );
      });
      setAllProducts(tempProducts);
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
          {allProducts.map((product, productIndex) => {
            const { productName, productQuantity, images, productCategory } =
              product;
            return (
              <div className='product' key={productIndex}>
                <div className='img'>
                  <img
                    src={images[0]}
                    alt={productName}
                    onClick={() => {
                      setSelectedProduct(products[productIndex].images);
                      setShowImagesViewer(true);
                    }}
                  />
                </div>
                <div className='details'>
                  <IoIosResize
                    onClick={() => {
                      setSelectedProduct(products[productIndex].images);
                      setShowImagesViewer(true);
                    }}
                  />
                  <h3>{productName}</h3>
                  <p>Category : {productCategory}</p>
                  <p>Quauntity in stock : {productQuantity}</p>
                </div>
              </div>
            );
          })}
        </div>

        {showImagesViewer ? <ImagesViewer /> : null}
      </section>
    </main>
  );
};

const ImagesViewer = () => {
  const { selectedProduct, setShowImagesViewer } = useGlobalContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((oldValue) => oldValue + 1);
    if (currentIndex === selectedProduct.length - 1) {
      setCurrentIndex(0);
    }
  };
  const handlePrev = () => {
    setCurrentIndex((oldValue) => oldValue - 1);
    if (currentIndex === 0) {
      setCurrentIndex(selectedProduct.length - 1);
    }
  };

  return (
    <section className='images-viewer'>
      <div className='close-btn'>
        <FaTimes onClick={() => setShowImagesViewer(false)} />
      </div>
      <div className='img'>
        <img src={selectedProduct[currentIndex]} alt='' />
      </div>
      <div className='btns'>
        <FaChevronLeft className='left' onClick={handlePrev} />
        <FaChevronRight className='right' onClick={handleNext} />
      </div>
    </section>
  );
};

export default Gallery;
