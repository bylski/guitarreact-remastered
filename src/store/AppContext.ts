import React, { useState, createContext } from "react";

type Categories = "none" | "guitars" | "amplifiers" | "accessories";

type AppContextType = {
  selectedCategory: Categories;
  onSelectCategory: (selectedCategory: Categories) => void;
  currentPath: string,
  // onSetPath: (currentPath: "string") => void;
};

const AppContext = createContext<AppContextType | null>(null);

export { AppContext };
export type { AppContextType, Categories }