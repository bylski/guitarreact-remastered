import React, { useState, createContext } from "react";
import {  ProductFilters } from "../types/app-interfaces";

type Categories = "none" | "guitars" | "amplifiers" | "accessories";

type AppContextType = {
  appliedFilters: ProductFilters;
  onApplyFilters: (newFilters: ProductFilters) => void
  selectedCategory: Categories;
  onSelectCategory: (selectedCategory: Categories) => void;
  currentPath: string,
  isCartWindowOpen: boolean,
  onOpenCartWindow: () => void,
  onCloseCartWindow: () => void,
  // onSetPath: (currentPath: "string") => void;
};

const AppContext = createContext<AppContextType | null>(null);

export { AppContext };
export type { AppContextType, Categories }