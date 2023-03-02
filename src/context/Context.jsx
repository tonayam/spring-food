import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

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
