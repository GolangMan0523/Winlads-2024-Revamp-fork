import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refreshCount, setRefreshCount] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [userImage, setUserImage] = useState("");

  const refresh = () => {
    setRefreshCount((prev) => !prev);
  };
  const handleMenu = (val)=>{
    setShowMenu(val);
  }

  return (
    <RefreshContext.Provider value={{ refreshCount, refresh ,showMenu, handleMenu, userImage, setUserImage}}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  const context = useContext(RefreshContext);
  if (!context) {
    throw new Error('useRefresh must be used within a RefreshProvider');
  }
  return context;
};

