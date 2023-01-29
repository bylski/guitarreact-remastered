import { NumberLiteralType } from "typescript";

export interface ProductType {
  name: string;
  price: number;
  rating: number;
  ratingsNum: number;
  imgSrc?: string;
}

export interface BaseFilters {
  price?: {
    from: number;
    to: number;
  };
  ratingFrom?: number | null;
}

interface GuitarFilters {
  brand?: Array<{ name: string; isChecked: boolean }>;
  stringsNum?: number;
}

export interface ElectricGuitarFilters extends GuitarFilters {
  // GUITAR_TYPE: "Electric" | "Undecided"
  pickupConfig?: "HH" | "HSH" | "HSS" | "SS" | "SSS";
  bridgeType?: "Fixed" | "Tremolo" | "Floyd Rose";
  bodyType?: "Stratocaster" | "Telecaster" | "Superstrat" | "Les Paul";
  fretsNum?: number;
}

export interface AcousticGuitarFilters extends GuitarFilters {
  // GUITAR_TYPE: "Acoustic" | "Undecided"
  electroAcoustic?: boolean,
}

export type WattageOptions = "20-45 Watts" | "50-100 Watts";

export interface AmplifierFilters extends BaseFilters {
  amplifierType?: "combo" | "head" | "miniamps";
  technology?: "tube" | "solid state" | "hybrid";
  speakerConfiguration?: WattageOptions;
  wattage?: "20-45 Watts" | "50-100 Watts"
}


export interface ProductFilters {
  electricGuitarFilters?: ElectricGuitarFilters,
  acousticGuitarFilters?: AcousticGuitarFilters,
  amplifierFilters?: AmplifierFilters,
  baseFilters?: BaseFilters
}
