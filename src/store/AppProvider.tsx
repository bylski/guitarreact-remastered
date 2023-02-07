import React, { useState, useEffect } from "react";
import { AppContext, AppContextType } from "./AppContext";
import { useLocation } from "react-router";
import {
  AcousticGuitarFiltersInterface,
  ElectricGuitarFiltersInterface,
  ProductFilters,
} from "../types/filter-interfaces";

import { CartProduct, CartProducts } from "../types/cart-interfaces";

const AppProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
  type Categories = "none" | "guitars" | "amplifiers" | "accessories";

  //  CONTEXT INTERNAL STATES
  const [selectedCategory, setSelectedCategory] = useState<Categories>("none");
  const [appliedFilters, setAppliedFilters] = useState<ProductFilters>({});
  const [isCartWindowOpen, setIsCartWindowOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartProducts>([]);

  // CART STATE LOGIC
  const onOpenCartWindow = () => {
    setIsCartWindowOpen(true);
  };

  const onCloseCartWindow = () => {
    setIsCartWindowOpen(false);
  };

  const onAddToCart = (item: CartProduct) => {
    setCartItems((prevCartState) => {
      // Check if products isn't already in the cart, if it is, increment the quantity accordingly
      const newCartState = prevCartState;
      let itemWasInCart = false;
      prevCartState.forEach((itemInCart, i) => {
        if (itemInCart.product.name === item.product.name) {
          newCartState[i].quantity += item.quantity;
          itemWasInCart = true;
        }
      });

      // If product isn't already in the cart, push it to the cart array
      if (!itemWasInCart) {
        newCartState.push(item);
      }
      return newCartState;
    });
  };

  const onRemoveFromCart = (itemName: string) => {
    setCartItems((prevCartState) => {
      // Filter through the previous state array to find the product that needs to be removed from cart
      const newCartState = prevCartState.filter((itemInCart) => {
        if (itemInCart.product.name === itemName) {
          return false;
        } else return true;
      });

      return newCartState;
    });
  };

  // CATEGORY SELECT STATE LOGIC

  const onSelectCategory = (selectedCategory: Categories) => {
    setAppliedFilters({});
    setSelectedCategory(selectedCategory);
  };

  // FILTERS STATE LOGIC

  const onApplyFilters = (newFilters: ProductFilters) => {
    setAppliedFilters(newFilters);
  };

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const AppContextValues: AppContextType = {
    selectedCategory: selectedCategory,
    onSelectCategory,
    currentPath,
    appliedFilters,
    onApplyFilters,
    isCartWindowOpen,
    onOpenCartWindow,
    onCloseCartWindow,
    cartItems,
    onAddToCart,
    onRemoveFromCart,
  };

  return (
    <AppContext.Provider value={AppContextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
