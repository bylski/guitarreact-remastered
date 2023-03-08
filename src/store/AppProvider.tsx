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
  // Category
  const [selectedCategory, setSelectedCategory] = useState<Categories>("none");
  const [selectedGuitarType, setSelectedGuitarType] = useState<
    undefined | "acoustic" | "electric"
  >("electric");
  // Filters
  const [appliedFilters, setAppliedFilters] = useState<ProductFilters>({});
  const [hasFiltersChanged, setHasFiltersChanged] = useState(false);
  // Cart
  const [isCartWindowOpen, setIsCartWindowOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartProducts>([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  // Alerts
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
        if (itemInCart.product.name.toLowerCase() === item.product.name.toLowerCase()) {
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

  const onIncrementItem = (itemName: string) => {
      // Check if products isn't already in the cart, if it is, increment the quantity accordingly
      setCartItems((prevCartState) => {
        // Check if products isn't already in the cart, if it is, increment the quantity accordingly
        const newCartState = prevCartState;
        let itemWasInCart = false;
        prevCartState.forEach((itemInCart, i) => {
          if (itemInCart.product.name.toLowerCase() === itemName.toLowerCase()) {
            newCartState[i].quantity += 1;
            itemWasInCart = true;
            setCartItemsQuantity((prev) => prev + 1);
          }
        });
  
        // If product isn't already in the cart, push it to the cart array
        if (!itemWasInCart) {
          onAddAlert({
            title: "No such item in cart!",
            text: "Product you are trying to increment is not present in the cart!",
            severity: "warning",
          });
        }
        return newCartState;
      });
  }

  const onDecrementItem = (itemName: string) => {
    // Check if products isn't already in the cart, if it is, increment the quantity accordingly
    setCartItems((prevCartState) => {
      // Check if products isn't already in the cart, if it is, increment the quantity accordingly
      const newCartState = prevCartState;
      let itemWasInCart = false;
      prevCartState.forEach((itemInCart, i) => {
        if (itemInCart.product.name.toLowerCase() === itemName.toLowerCase()) {
          newCartState[i].quantity -= 1;
          itemWasInCart = true;
          setCartItemsQuantity((prev) => prev - 1);
          // Remove from array when product quantity equals 0
          if (newCartState[i].quantity === 0) {
            newCartState.splice(i, 1);
          }
        }
      });

      // If product isn't already in the cart, push it to the cart array
      if (!itemWasInCart) {
        onAddAlert({
          title: "No such item in cart!",
          text: "Product you are trying to decrement is not present in the cart!",
          severity: "warning",
        });
      }
      return newCartState;
    });
}


  // CATEGORY SELECT STATE LOGIC

  const onSelectCategory = (selectedCategory: Categories) => {
    setAppliedFilters({});
    setSelectedCategory(selectedCategory);
  };

  const onSelectGuitarType = (selectedType: "acoustic" | "electric") => {
    setSelectedGuitarType(selectedType);
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

    switch (location.pathname) {
      case "/guitars/electric":
        setSelectedGuitarType("electric");
        break;
      case "/guitars/acoustic":
        setSelectedGuitarType("acoustic");
        break;
    }
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
    let alertTriggered = false;
    if (
      productToAdd.name === product1?.name ||
      productToAdd.name === product2?.name
    ) {
      onAddAlert({
        title: "Already being compared!",
        text: "Product you are trying to compare is already being compared",
        severity: "info",
      });
      alertTriggered = true;
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
    } else {
      if (!alertTriggered) {
        onAddAlert({
          title: "Compare Window Full!",
          text: "You cannot compare more products as compare window is already full",
          severity: "info",
        });
      }
    }
  };

  const onRemoveProductToCompare = (productToRemove: ProductType) => {
    const { product1, product2 } = comparedProducts;
    if (productToRemove.name === product1?.name) {
      setComparedProducts((prev) => {
        if (prev.product2 === null) {
          onSetCompareWindowState("collapse");
        }
        return { product1: null, product2: prev.product2 };
      });
    } else if (productToRemove.name === product2?.name) {
      setComparedProducts((prev) => {
        if (prev.product1 === null) {
          onSetCompareWindowState("collapse");
        }
        return { product1: prev.product1, product2: null };
      });
    } else {
      onAddAlert({
        title: "No such item is being compared!",
        text: "The item you want to remove does not exist",
        severity: "info",
      });
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
    selectedGuitarType,
    onSelectGuitarType,
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
    onIncrementItem,
    onDecrementItem,
    // Compare window values
    isCompareWindowCollapsed,
    onSetCompareWindowState,
    comparedProducts,
    onAddProductToCompare,
    onRemoveProductToCompare,
    // Alerts
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
