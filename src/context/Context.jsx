import React, { useContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showImagesViewer, setShowImagesViewer] = useState(false);

  const client = createClient({
    space: `fbfthezih32w`,
    accessToken: `PQwZmSEYmFC8awUCoiG4H-ZRFwJA-9FJ5zWCXGg5dZw`,
  });

  const getAllProducts = async () => {
    try {
      const response = await client.getEntries({ select: `fields` });
      setProducts(
        response.items.map((product) => {
          const images = product.fields.productImages.map(
            (image) => image.fields.file.url
          );
          return {
            ...product.fields,
            images,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  // RESET PAGE
  const resetPage = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <AppContext.Provider
      value={{
        resetPage,
        showNavbar,
        setShowNavbar,
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        showImagesViewer,
        setShowImagesViewer,
        getAllProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
