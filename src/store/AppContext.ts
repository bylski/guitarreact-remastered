import React, { useState, createContext } from "react";
import { AcousticGuitarFilters, ElectricGuitarFilters } from "../types/app-interfaces";

type Categories = "none" | "guitars" | "amplifiers" | "accessories";

type AppContextType = {
  appliedFilters: ElectricGuitarFilters | AcousticGuitarFilters;
  onApplyFilters: (newFilters: ElectricGuitarFilters | AcousticGuitarFilters) => void
  selectedCategory: Categories;
  onSelectCategory: (selectedCategory: Categories) => void;
  currentPath: string,
  // onSetPath: (currentPath: "string") => void;
};

const AppContext = createContext<AppContextType | null>(null);

export { AppContext };
export type { AppContextType, Categories }