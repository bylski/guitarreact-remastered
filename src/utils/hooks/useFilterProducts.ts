import { AppContext } from "../../store/AppContext";
import {
  AccessoriesProduct,
  AmplifiersProduct,
  ProductType,
} from "../../types/product-interfaces";
import React, { useContext } from "react";
import { ElectricGuitarProduct } from "../../types/product-interfaces";
import {
  ElectricGuitarFiltersInterface,
  ProductFilters,
  ProductFiltersTypes,
} from "../../types/filter-interfaces";
import ElectricGuitarFilters from "../../components/FiltersMenu/GuitarFilters/ElectricGuitarFilters";

const useFilterProducts = (productsArray: ProductType[] | null) => {
  const ctx = useContext(AppContext);
  const appliedFilters = ctx?.appliedFilters || null;

  if (productsArray === null) {
    return productsArray;
  }

  // If there are no filters applied, return the unchanged productsArray
  if (appliedFilters === null) {
    return productsArray;
  }

  let newProductsArray = productsArray;
  const {
    electricGuitarFilters,
    acousticGuitarFilters,
    amplifierFilters,
    accessoriesFilters,
    baseFilters,
  } = appliedFilters;

  function FilterCheckboxes<K>(
    filterCheckboxesArray: any,
    productsArray: K[],
    comparedFilterNames: Array<keyof K>
  ) {
    // Check if filter array is defined and has elements
    if (filterCheckboxesArray && filterCheckboxesArray.length !== 0) {
      productsArray = productsArray.filter((product) => {
        // Loop through every given filter name (bodyType, fretsNum etc.)
        for (let filterName of comparedFilterNames) {
          if (
            filterCheckboxesArray[filterName] &&
            filterCheckboxesArray[filterName].length !== 0
          ) {
            let productMatchesFilter = false;
            // Compare the values of the appliedFilter array and product's specification
            for (let filterValue of filterCheckboxesArray[filterName]) {
              if (filterValue === product[filterName]) {
                productMatchesFilter = true;
                break;
              }
            }

            if (!productMatchesFilter) return false;
          }
        }

        return true;
      });
    }

    return productsArray;
  }

  function FilterRadioInputs<T, K>(
    radioFilters: any,
    productsArray: K[],
    comparedFilterNames: Array<keyof K>
  ) {
    productsArray = productsArray.filter((product) => {
      // Loop through every given filter name (amplifierType, technology etc.)
      for (let filterName of comparedFilterNames) {
        const ampProduct = product as AmplifiersProduct;
        if (product[filterName]) {
          if (radioFilters[filterName]) {
            if (radioFilters[filterName] !== product[filterName]) {
              return false;
            }
          }
        }
      }
      return true;
    });
    return productsArray;
  }

  // **************** BASE FILTERS *********************

  // PRICE FILTER
  if (baseFilters?.price) {
    const { from: priceFromFilter, to: priceToFilter } = baseFilters.price;
    newProductsArray = newProductsArray.filter((product) => {
      if (
        (product.price >= priceFromFilter || Number.isNaN(priceFromFilter)) &&
        (product.price <= priceToFilter || Number.isNaN(priceToFilter))
      ) {
        return true;
      } else return false;
    });
  }

  // RATING FILTER
  if (baseFilters?.ratingFrom) {
    const { ratingFrom: ratingFromFilter } = baseFilters;
    newProductsArray = newProductsArray.filter((product) => {
      if (product.rating >= ratingFromFilter) {
        return true;
      } else return false;
    });
  }

  // **************** ELECTRIC GUITAR FILTERS *********************

  // Filter through checkboxes filters
  if (electricGuitarFilters) {
    newProductsArray = FilterCheckboxes(
      electricGuitarFilters,
      newProductsArray as ElectricGuitarProduct[],
      [
        "bodyType",
        "brand",
        "bridgeType",
        "fretsNum",
        "pickupConfig",
        "stringsNum",
      ]
    );
  }

  if (amplifierFilters) {
    console.log(ctx?.appliedFilters);
    newProductsArray = FilterRadioInputs(
      amplifierFilters,
      newProductsArray as AmplifiersProduct[],
      ["amplifierType", "speakerConfiguration", "technology"]
    );
    newProductsArray = FilterCheckboxes(
      amplifierFilters,
      newProductsArray as AmplifiersProduct[],
      ["wattage"]
    );
  }

  if (accessoriesFilters) {
    newProductsArray = FilterRadioInputs(
      accessoriesFilters,
      newProductsArray as AccessoriesProduct[],
      ["categories"]
    );
  }

  return newProductsArray;
};

export default useFilterProducts;
