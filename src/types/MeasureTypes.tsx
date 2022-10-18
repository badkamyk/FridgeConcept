export type FluidData = ["ml", "l"];
export type SolidData = ["kg", "g", "mg"];
const measureOptions = ["ml", "l", "kg", "g", "mg"];
export type Option = typeof measureOptions[number];
