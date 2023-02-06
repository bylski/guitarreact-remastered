export interface ProductBase {
  name: string;
  price: number;
  rating: number;
  ratingsNum: number;
  imgSrc?: string;
  brand?: string;
}

// GUITAR PRODUCT

interface GuitarProduct extends ProductBase {
  stringsNum: 6 | 7 | 8 | 12;
}

export interface ElectricGuitarProduct extends GuitarProduct {
  pickupConfig: "HH" | "HSH" | "HSS" | "SS" | "SSS";
  bridgeType: "Fixed" | "Tremolo" | "Floyd Rose";
  bodyType: "Stratocaster" | "Telecaster" | "Superstrat" | "Les Paul" | "Other";
  fretsNum: 21 | 22 | 24;
}

export interface AcousticGuitarProduct extends GuitarProduct {
  electroAcoustic: boolean;
}

// AMPLIFIER PRODUCT

export interface AmplifiersProduct extends ProductBase {
  amplifierType?: "combo" | "head" | "miniamps";
  technology?: "tube" | "solid state" | "hybrid";
  speakerConfiguration?: "1x12" | "1x8" | "2x3";
  wattage?: "20-45 Watts" | "50-100 Watts";
}

// ACCESSORIES PRODUCT

export interface AccessoriesProduct extends ProductBase {
  categories?:
    | "String"
    | "Guitar Picks"
    | "Audio Interfaces"
    | "Guitar Cases"
    | "Cables"
    | "Tools";
}

export type ProductType =
  | ElectricGuitarProduct
  | AcousticGuitarProduct
  | AmplifiersProduct
  | AccessoriesProduct;
