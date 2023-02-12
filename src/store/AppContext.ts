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
  // onSetPath: (currentPath: "string") => void;
};

const AppContext = createContext<AppContextType | null>(null);

export { AppContext };
export type { AppContextType, Categories };
