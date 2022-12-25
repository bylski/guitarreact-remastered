import React, { useState, createContext } from "react";
import { AppContext } from "./AppContext";

const AppProvider: React.FC<{children?: React.ReactNode}> = (props) => {

type Categories = "none" | "guitars" | "amplifiers" | "accessories";
const [selectedCategory, setSelectedCategory] = useState<Categories>("none");
const onSelectCategory = (
  selectedCategory: Categories
) => {
  setSelectedCategory(selectedCategory);
};

const AppContextValues = {
  selectedCategory: selectedCategory,
  onSelectCategory,
};


  return (
    <AppContext.Provider value={AppContextValues}>
      {props.children}
    </AppContext.Provider>
  );
};


export { AppProvider, AppContext };
