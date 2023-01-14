import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { useLocation } from "react-router";

const AppProvider: React.FC<{children?: React.ReactNode}> = (props) => {

type Categories = "none" | "guitars" | "amplifiers" | "accessories";
const [selectedCategory, setSelectedCategory] = useState<Categories>("none");
const onSelectCategory = (
  selectedCategory: Categories
) => {
  setSelectedCategory(selectedCategory);
};

const location = useLocation();
const [currentPath, setCurrentPath] = useState(location.pathname);

useEffect(() => {
  setCurrentPath(location.pathname);
}, [location])

const AppContextValues = {
  selectedCategory: selectedCategory,
  onSelectCategory,
  currentPath,
  // onSetPath: () => setCurrentPath()
};


  return (
    <AppContext.Provider value={AppContextValues}>
      {props.children}
    </AppContext.Provider>
  );
};


export { AppProvider, AppContext };
