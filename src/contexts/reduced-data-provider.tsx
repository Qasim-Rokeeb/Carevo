'use client';

import React, {createContext, useContext, useState, useEffect} from 'react';

interface ReducedDataContextType {
  isReducedData: boolean;
  setIsReducedData: (isReduced: boolean) => void;
}

const ReducedDataContext = createContext<ReducedDataContextType | undefined>(
  undefined
);

export const ReducedDataProvider = ({children}: {children: React.ReactNode}) => {
  const [isReducedData, setIsReducedDataState] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('reduced-data-mode');
    if (savedState) {
      setIsReducedDataState(JSON.parse(savedState));
    }
  }, []);

  const setIsReducedData = (isReduced: boolean) => {
    setIsReducedDataState(isReduced);
    localStorage.setItem('reduced-data-mode', JSON.stringify(isReduced));
  };

  return (
    <ReducedDataContext.Provider value={{isReducedData, setIsReducedData}}>
      {children}
    </ReducedDataContext.Provider>
  );
};

export const useReducedData = () => {
  const context = useContext(ReducedDataContext);
  if (context === undefined) {
    throw new Error('useReducedData must be used within a ReducedDataProvider');
  }
  return context;
};
