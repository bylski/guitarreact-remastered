import React, { useContext } from "react";
import {
  AcousticGuitarFiltersInterface,
  ElectricGuitarFiltersInterface,
  AmplifierFiltersInterface,
  AccessoriesFiltersInterface,
  ProductFilters,
} from "../../types/filter-interfaces";
import { AppContext } from "../../store/AppContext";

type FilterToApply =
  | { filterGroup: "electricGuitar"; newFilter: ElectricGuitarFiltersInterface }
  | { filterGroup: "acousticGuitar"; newFilter: AcousticGuitarFiltersInterface }
  | { filterGroup: "amplifier"; newFilter: AmplifierFiltersInterface }
  | { filterGroup: "accessories"; newFilter: AccessoriesFiltersInterface };

const useApplyFilters = () => {
  const ctx = useContext(AppContext);

  const applyFilters = (filterToApply: FilterToApply) => {
    let prevFilterGroupState = null;
    const { filterGroup, newFilter } = filterToApply;
    const appliedFilters = ctx?.appliedFilters;
    let newFilters: ProductFilters = {};

    
    if (appliedFilters !== undefined) {
      switch (filterToApply.filterGroup) {
        case "electricGuitar":
          prevFilterGroupState = appliedFilters.electricGuitarFilters;
          newFilters = {
            ...newFilters,
            electricGuitarFilters: { ...prevFilterGroupState, ...newFilter },
          };
          break;
        case "acousticGuitar":
          prevFilterGroupState = appliedFilters.acousticGuitarFilters;
          newFilters = {
            ...newFilters,
            acousticGuitarFilters: { ...prevFilterGroupState, ...newFilter },
          };
          break;
        case "amplifier":
          prevFilterGroupState = appliedFilters.amplifierFilters;
          newFilters = {
            ...newFilters,
            amplifierFilters: { ...prevFilterGroupState, ...newFilter },
          };
          break;
        case "accessories":
          prevFilterGroupState = appliedFilters.accesoriesFilters;
          newFilters = {
            ...newFilters,
            accesoriesFilters: { ...prevFilterGroupState, ...newFilter },
          };
      }
    }

    if (ctx?.onApplyFilters !== undefined) {
      ctx?.onApplyFilters({
        ...appliedFilters,
        ...newFilters,
      });
    }
    
  };

  return applyFilters;
};

export default useApplyFilters;
