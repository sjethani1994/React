import React, { createContext, useContext, useState } from "react";

// Create a context for our global state
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Provide the value to the children components
  return (
    <GlobalStateContext.Provider value={{
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading
      }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access global states
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
