import React, { useState, useEffect } from "react";
import { AppContext, AppContextType } from "./AppContext";
import { useLocation } from "react-router";
import { AcousticGuitarFiltersInterface, ElectricGuitarFiltersInterface, ProductFilters } from "../types/app-interfaces";

const AppProvider: React.FC<{children?: React.ReactNode}> = (props) => {

type Categories = "none" | "guitars" | "amplifiers" | "accessories";
const [selectedCategory, setSelectedCategory] = useState<Categories>("none");
const [appliedFilters, setAppliedFilters] = useState<ProductFilters>({})
const onSelectCategory = (
  selectedCategory: Categories
) => {
  // setAppliedFilters({})
  setSelectedCategory(selectedCategory);
};

const onApplyFilters = (newFilters: ProductFilters) => {
  setAppliedFilters(newFilters);
}

const location = useLocation();
const [currentPath, setCurrentPath] = useState(location.pathname);

useEffect(() => {
  setCurrentPath(location.pathname);
}, [location])

const AppContextValues: AppContextType = {
  selectedCategory: selectedCategory,
  onSelectCategory,
  currentPath,
  appliedFilters,
  onApplyFilters,
  // onSetPath: () => setCurrentPath()
};


  return (
    <AppContext.Provider value={AppContextValues}>
      {props.children}
    </AppContext.Provider>
  );
};


export { AppProvider, AppContext };
