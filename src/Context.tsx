
import React, { useState } from "react";
import { IFormFields } from "./interfaces/ProductInfo";
import { measureData } from "./utils/units";
import { v4 as uuidv4 } from "uuid";
import { Option } from "./types/MeasureTypes";


const Context = React.createContext({} as {
    products: IFormFields[];
    // setProducts: (
    //     product: ({ amount: number; chosenMeasure: Option | ""; measureTypes?: string[]; id: string; productName: string })[]
    // ) => void;
    // setProducts: (product: [...({ amount: number; chosenMeasure: Option | ""; measureTypes?: string[]; id: string; productName: string } | IFormFields)[]]) => void;
    setProducts: (product: (IFormFields | { amount: number; chosenMeasure: string; measureTypes?: string[] | undefined; id: string; productName: string; })[] | ((prevProducts: IFormFields[]) => IFormFields[])) => void;
    edit?: IFormFields;
    setEdit: (edit: IFormFields | undefined) => void;
    handleEdit: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
    handleRemove: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
    cart: { id: string; productName: string; amount: number; chosenMeasure: string }[];
    setCart: (cart: ({ id: string; productName: string; amount: number; chosenMeasure: string }[])) => void;
});

const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [products, setProducts] = useState<IFormFields[]>([]);
    const [edit, setEdit] = useState<IFormFields | undefined>(undefined);
    const [cart, setCart] = useState<{ id: string; productName: string; amount: number; chosenMeasure: string }[]>([]);
    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        const productToEdit = products.find((product) => product.id === id);
        if (productToEdit) {
            setEdit({ ...productToEdit, measureTypes: measureData });
        }
    }

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        const filteredProducts = products.filter((product) => product.id !== id);
        setProducts(filteredProducts);
    }

    return (
        <Context.Provider value={{ products, setProducts, edit, setEdit, handleEdit, handleRemove, cart, setCart }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };
