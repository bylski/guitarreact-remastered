import { NumberLiteralType } from "typescript";



export interface BaseFilters {
  price?: {
    from: number;
    to: number;
  };
  ratingFrom?: number | null;
}

// GUITAR

interface GuitarFiltersInterface {
  brand?: Array<string>;
  stringsNum?: Array<string>;
}

export interface ElectricGuitarFiltersInterface extends GuitarFiltersInterface {
  pickupConfig?: Array<"HH" | "HSH" | "HSS" | "SS" | "SSS">;
  bridgeType?: Array<"Fixed" | "Tremolo" | "Floyd Rose">;
  bodyType?: Array<"Stratocaster" | "Telecaster" | "Superstrat" | "Les Paul" | "Other">;
  fretsNum?: Array<string>;
}

export interface AcousticGuitarFiltersInterface extends GuitarFiltersInterface {
  electroAcoustic?: boolean;
}

// AMPLIFIERS

export type WattageOptions = Array<"20-45 Watts" | "50-100 Watts">;

export interface AmplifierFiltersInterface extends BaseFilters {
  amplifierType?: "combo" | "head" | "miniamps";
  technology?: "tube" | "solid state" | "hybrid";
  speakerConfiguration?: "1x12" | "1x8" | "2x3";
  wattage?: WattageOptions;
}

// ACCESSORIES

export type AccessoriesCategories =
  | "String"
  | "Guitar Picks"
  | "Audio Interfaces"
  | "Guitar Cases"
  | "Cables"
  | "Tools";

export interface AccessoriesFiltersInterface extends BaseFilters {
  categories?: AccessoriesCategories;
}

// MAIN FILTER INTERFACE

export interface ProductFilters {
  electricGuitarFilters?: ElectricGuitarFiltersInterface;
  acousticGuitarFilters?: AcousticGuitarFiltersInterface;
  amplifierFilters?: AmplifierFiltersInterface;
  accesoriesFilters?: AccessoriesFiltersInterface;
  baseFilters?: BaseFilters;
}
