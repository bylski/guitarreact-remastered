import React, { useState, createContext } from "react";
import { ProductFilters } from "../types/filter-interfaces";
import { ProductType } from "../types/product-interfaces";
import { CartProduct } from "../types/cart-interfaces";

type Categories = "none" | "guitars" | "amplifiers" | "accessories";

type AppContextType = {
  appliedFilters: ProductFilters;
  onApplyFilters: (newFilters: ProductFilters) => void;
  hasFiltersChanged: boolean;
  resetFilterChange: () => void;
  selectedCategory: Categories;
  onSelectCategory: (selectedCategory: Categories) => void;
  currentPath: string;
  isCartWindowOpen: boolean;
  onOpenCartWindow: () => void;
  onCloseCartWindow: () => void;
  cartItems: Array<{ product: ProductType; quantity: number }>;
  onAddToCart: (item: CartProduct) => void;
  onRemoveFromCart: (itemName: string) => void;
  isCompareWindowCollapsed: boolean;
  onSetCompareWindowState: (state: "expand" | "collapse") => void;
  comparedProducts: {
    product1: ProductType | null;
    product2: ProductType | null;
  };
  onAddProductToCompare: (productToAdd: ProductType) => void;
  onRemoveProductToCompare: (productToRemove: ProductType) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export { AppContext };
export type { AppContextType, Categories };
