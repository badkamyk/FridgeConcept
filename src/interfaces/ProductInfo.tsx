import { Option } from "../types/MeasureTypes";

export interface IFormFields {
    productName: string;
    amount: number;
    measureTypes?: string[];
    chosenMeasure: Option | "";
    id: string;
}
