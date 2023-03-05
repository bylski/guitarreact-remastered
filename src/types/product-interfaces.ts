export interface ProductBase {
  name: string;
  price: number;
  rating: number;
  ratingsNum: number;
  imgSrc?: string;
  brand?: string;
  productType?: "electric guitar" | "acoustic guitar" | "amplifier" | "accessory"
}

// GUITAR PRODUCT

interface GuitarProduct extends ProductBase {
  stringsNum: "6 String" | "7 String" | "8 String" | "12 String";
}

export interface ElectricGuitarProduct extends GuitarProduct {
  pickupConfig: "HH" | "HSH" | "HSS" | "SS" | "SSS";
  bridgeType: "Fixed" | "Tremolo" | "Floyd Rose";
  bodyType: "Stratocaster" | "Telecaster" | "Superstrat" | "Les Paul" | "Other";
  fretsNum: "21 Frets" | "22 Frets" | "24 Frets";
}

export interface AcousticGuitarProduct extends GuitarProduct {
  electroAcoustic: boolean;
}

// AMPLIFIER PRODUCT

export interface AmplifiersProduct extends ProductBase {
  amplifierType?: "Combo" | "Head" | "MiniAmps";
  technology?: "Tube" | "Solid State" | "Hybrid";
  speakerConfiguration?: "1x12" | "1x8" | "2x3";
  wattage?: "20-45 Watts" | "50-100 Watts" | "1-15 Watts"
}

// ACCESSORIES PRODUCT

export interface AccessoriesProduct extends ProductBase {
  categories?:
    | "Strings"
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
