"use client";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <Context.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
