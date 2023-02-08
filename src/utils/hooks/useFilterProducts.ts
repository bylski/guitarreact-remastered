import { AppContext } from "../../store/AppContext";
import { ProductType } from "../../types/product-interfaces";
import React, { useContext } from "react";
import { ElectricGuitarProduct } from "../../types/product-interfaces";
import {
  ElectricGuitarFiltersInterface,
  ProductFilters,
  ProductFiltersTypes,
} from "../../types/filter-interfaces";
import ElectricGuitarFilters from "../../components/FiltersMenu/GuitarFilters/ElectricGuitarFilters";

const useFilterProducts = (productsArray: ProductType[]) => {
  const ctx = useContext(AppContext);
  const appliedFilters = ctx?.appliedFilters || null;

  // If there are no filters applied, return the unchanged productsArray
  if (appliedFilters === null) {
    return productsArray;
  }

  let newProductsArray = productsArray;
  const {
    electricGuitarFilters,
    acousticGuitarFilters,
    amplifierFilters,
    accesoriesFilters,
    baseFilters,
  } = appliedFilters;

  // Function to filter through checkboxes filters
  function FilterCheckboxes<T, K>(
    filterCheckboxesArray: any,
    productsArray: K[],
    comparedPropertyName: keyof K
  ) {
    // Check if filter array is defined and has elements
    if (filterCheckboxesArray && filterCheckboxesArray.length !== 0) {
      productsArray = productsArray.filter((product) => {
        let productMatchesFilters = false;
        for (let filter of filterCheckboxesArray) {
          if (filter === product[comparedPropertyName as keyof K]) {
            productMatchesFilters = true;
            break;
          }
        }

        if (productMatchesFilters) {
          return true;
        } else return false;
      });
    }

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

  console.log(ctx?.appliedFilters)

  // Filter through checkboxes filters
  if (electricGuitarFilters) {
    for (let filter in electricGuitarFilters) {
      if (filter.length !== 0) {
        newProductsArray = FilterCheckboxes(
          electricGuitarFilters[filter as keyof ElectricGuitarFiltersInterface],
          newProductsArray as ElectricGuitarProduct[],
          filter as keyof ElectricGuitarProduct
        );
      }
    }
  }

  //   if (electricGuitarFilters?.bodyType) {
  //     newProductsArray = FilterCheckboxes(
  //       electricGuitarFilters?.bodyType,
  //       newProductsArray as ElectricGuitarProduct[],
  //       "bodyType"
  //     );
  //   }

  //   if (electricGuitarFilters?.pickupConfig) {
  //     newProductsArray = FilterCheckboxes(
  //       electricGuitarFilters?.pickupConfig,
  //       newProductsArray as ElectricGuitarProduct[],
  //       "pickupConfig"
  //     );
  //   }

  //   if (electricGuitarFilters?.bridgeType) {
  //     newProductsArray = FilterCheckboxes(
  //       electricGuitarFilters?.pickupConfig,
  //       newProductsArray as ElectricGuitarProduct[],
  //       "pickupConfig"
  //     );
  //   }

  //   export interface ElectricGuitarFiltersInterface extends GuitarFiltersInterface {
  //     pickupConfig?: Array<"HH" | "HSH" | "HSS" | "SS" | "SSS">;
  //     bridgeType?: Array<"Fixed" | "Tremolo" | "Floyd Rose">;
  //     bodyType?: Array<
  //       "Stratocaster" | "Telecaster" | "Superstrat" | "Les Paul" | "Other"
  //     >;
  //     fretsNum?: Array<string>;
  //   }

  return newProductsArray;
};

export default useFilterProducts;
