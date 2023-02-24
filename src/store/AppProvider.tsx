import React, { useState, useEffect } from "react";
import { AppContext, AppContextType } from "./AppContext";
import { useLocation } from "react-router";
import {
  AcousticGuitarFiltersInterface,
  ElectricGuitarFiltersInterface,
  ProductFilters,
} from "../types/filter-interfaces";

import { CartProduct, CartProducts } from "../types/cart-interfaces";
import { ProductType } from "../types/product-interfaces";
import { Alert, AlertContent } from "../types/alert-interfaces";
import { forEachChild } from "typescript";

const AppProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
  type Categories = "none" | "guitars" | "amplifiers" | "accessories";

  //  CONTEXT INTERNAL STATES
  const [selectedCategory, setSelectedCategory] = useState<Categories>("none");
  const [appliedFilters, setAppliedFilters] = useState<ProductFilters>({});
  const [isCartWindowOpen, setIsCartWindowOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartProducts>([]);
  const [hasFiltersChanged, setHasFiltersChanged] = useState(false);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  const [currentAlert, setCurrentAlert] = useState<Alert | null>(null);

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
          setCartItemsQuantity((prev) => prev + 1);
        }
      });

      // If product isn't already in the cart, push it to the cart array
      if (!itemWasInCart) {
        setCartItemsQuantity((prev) => prev + 1);
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
          setCartItemsQuantity((prev) => prev - itemInCart.quantity);
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
    if (appliedFilters !== newFilters) {
      setHasFiltersChanged(true);
    }

    setAppliedFilters(newFilters);
  };

  const resetFilterChange = () => {
    setHasFiltersChanged(false);
  };

  // PATH STATE LOGIC

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setComparedProducts({ product1: null, product2: null });
    setCurrentPath(location.pathname);
  }, [location]);

  // COMPARE WINDOW STATE LOGIC

  const [isCompareWindowCollapsed, setIsCompareWindowCollapsed] =
    useState(true);
  const [comparedProducts, setComparedProducts] = useState<{
    product1: ProductType | null;
    product2: ProductType | null;
  }>({
    product1: null,
    product2: null,
  });

  const onAddProductToCompare = (productToAdd: ProductType) => {
    const { product1, product2 } = comparedProducts;
    let isAlreadyBeingCompared = false;
    if (
      productToAdd.name === product1?.name ||
      productToAdd.name === product1?.name
    ) {
      isAlreadyBeingCompared = true;
    }
    if (product1 === null || (product2 === null && !isAlreadyBeingCompared)) {
      setComparedProducts((prev) => {
        if (prev.product1 === null) {
          setIsCompareWindowCollapsed(false);
          return { product1: productToAdd, product2: prev.product2 };
        } else {
          setIsCompareWindowCollapsed(false);
          return { product1: prev.product1, product2: productToAdd };
        }
      });
    }
  };

  const onRemoveProductToCompare = (productToRemove: ProductType) => {
    const { product1, product2 } = comparedProducts;
    if (productToRemove.name === product1?.name) {
      setComparedProducts((prev) => ({
        product1: null,
        product2: prev.product2,
      }));
    } else if (productToRemove.name === product2?.name) {
      setComparedProducts((prev) => ({
        product1: prev.product1,
        product2: null,
      }));
    } else {
      console.log("NO SUCH PRODUCT IS BEING COMPARED");
    }
  };

  const onSetCompareWindowState = (state: "expand" | "collapse") => {
    if (state === "collapse") {
      setIsCompareWindowCollapsed(true);
    } else {
      setIsCompareWindowCollapsed(false);
    }
  };

  // Alerts

  const onAddAlert = (newAlert: AlertContent) => {
    setCurrentAlert((prev) => {
      const prevAlertContent = prev?.alertContent;
      const newAlertContent = newAlert;
      if (
        prevAlertContent?.severity === newAlertContent.severity &&
        prevAlertContent?.title === newAlertContent.title &&
        prev !== null
      ) {
        return { ...prev, quantity: prev.quantity + 1 };
      } else {
        return { alertContent: { ...newAlert }, quantity: 1 };
      }
    });
  };

  const onRemoveAlert = (alertTitle: string) => {
    setCurrentAlert(null);
  };

  const AppContextValues: AppContextType = {
    // Category values
    selectedCategory: selectedCategory,
    onSelectCategory,
    // Path values
    currentPath,
    // Filters values
    appliedFilters,
    onApplyFilters,
    hasFiltersChanged,
    resetFilterChange,
    // Cart values
    isCartWindowOpen,
    onOpenCartWindow,
    onCloseCartWindow,
    cartItems,
    onAddToCart,
    onRemoveFromCart,
    cartItemsQuantity,
    // Compare window values
    isCompareWindowCollapsed,
    onSetCompareWindowState,
    comparedProducts,
    onAddProductToCompare,
    onRemoveProductToCompare,
    // A;erts
    currentAlert,
    onAddAlert,
    onRemoveAlert,
  };

  return (
    <AppContext.Provider value={AppContextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
