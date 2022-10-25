
import React, {useState} from "react";
import {IFormFields} from "./interfaces/ProductInfo";


const Context = React.createContext({} as {
    products: IFormFields[];
    setProducts: (
        product: ((prevProducts: IFormFields[]) => IFormFields[]) | []
    ) => void;
    edit?: IFormFields;
    setEdit: (edit: IFormFields | undefined) => void;
    handleEdit: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
    handleRemove: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
});

const ContextProvider = ({children}: React.PropsWithChildren) => {
    const [products, setProducts] = useState<IFormFields[]>([]);
    const [edit, setEdit] = useState<IFormFields | undefined>(undefined);

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        const productToEdit = products.find((product) => product.id === id);
        if (productToEdit) {
            setEdit(productToEdit);
        }
    }


    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        const filteredProducts = products.filter((product) => product.id !== id);
        setProducts(filteredProducts);
    }

    return (
        <Context.Provider value={{products, setProducts, edit, setEdit, handleEdit, handleRemove}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};
