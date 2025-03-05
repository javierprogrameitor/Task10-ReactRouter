// src/context/GiftContext.jsx
import React, { createContext, useContext, useState } from 'react';

const GiftContext = createContext();

export function GiftProvider({ children }) {
  // El estado global que guarda los regalos. Cada regalo tendrá { name, description }.
  const [gifts, setGifts] = useState([]);

  const addGift = (gift) => {
    setGifts([...gifts, gift]);
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift }}>
      {children}
    </GiftContext.Provider>
  );
}

export function useGifts() {
  return useContext(GiftContext);
}
