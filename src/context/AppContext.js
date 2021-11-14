import React, {useContext, useEffect, useState} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{value: 'minji'}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
