import React, { useState, createContext } from "react";
import { ProductFilters } from "../types/filter-interfaces";
import { ProductType } from "../types/product-interfaces";
import { CartProduct } from "../types/cart-interfaces";
import { Alert, AlertContent } from "../types/alert-interfaces";

type Categories = "none" | "guitars" | "amplifiers" | "accessories";

type AppContextType = {
  // Filters
  appliedFilters: ProductFilters;
  onApplyFilters: (newFilters: ProductFilters) => void;
  hasFiltersChanged: boolean;
  resetFilterChange: () => void;
  // Category
  selectedCategory: Categories;
  onSelectCategory: (selectedCategory: Categories) => void;
  // Path
  currentPath: string;
  // Cart Window / Cart
  isCartWindowOpen: boolean;
  onOpenCartWindow: () => void;
  onCloseCartWindow: () => void;
  cartItems: Array<{ product: ProductType; quantity: number }>;
  cartItemsQuantity: number;
  onAddToCart: (item: CartProduct) => void;
  onRemoveFromCart: (itemName: string) => void;
  // Compare Window
  isCompareWindowCollapsed: boolean;
  onSetCompareWindowState: (state: "expand" | "collapse") => void;
  comparedProducts: {
    product1: ProductType | null;
    product2: ProductType | null;
  };
  onAddProductToCompare: (productToAdd: ProductType) => void;
  onRemoveProductToCompare: (productToRemove: ProductType) => void;
  // Alerts
  currentAlert: Alert | null;
  onAddAlert: (newAlert: AlertContent) => void
  onRemoveAlert: (alertTitle: string) => void,
};

const AppContext = createContext<AppContextType | null>(null);

export { AppContext };
export type { AppContextType, Categories };
