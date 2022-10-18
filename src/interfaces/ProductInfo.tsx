import { FluidData, Option, SolidData } from "../types/MeasureTypes";

export interface IFormFields {
    productName: string;
    texture: "fluid" | "solid" | "";
    amount: number;
    measureTypes?: FluidData | SolidData;
    chosenMeasure: Option | "";
    id: string;
}
