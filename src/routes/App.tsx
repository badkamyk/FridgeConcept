import { useState } from "react";
import "../styles/App.css";
import Form from "../components/Form";
import Nav from "../components/Nav";
import FridgeItems from "../components/FridgeItems";
import { IFormFields } from "../interfaces/ProductInfo";
import * as React from "react";
import {Context} from "../Context";
import {useContext} from "react";

function App() {
    // const [products, setProducts] = useState<IFormFields[]>([]);
    // const [edit, setEdit] = useState<IFormFields | undefined>(undefined);
    const {products, setProducts, edit, setEdit, handleEdit, handleRemove} = useContext(Context);

    // const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    //     const productToEdit = products.find((product) => product.id === id);
    //     if (productToEdit) {
    //         setEdit(productToEdit);
    //     }
    // }
    //
    //
    // const handleRemove = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    //     const filteredProducts = products.filter((product) => product.id !== id);
    //     setProducts(filteredProducts);
    // }




    return (
        <div className="App">
            {/*<Nav />*/}
            <div className="form-item--container">
                <Form
                    edit={edit}
                    resetEdit={setEdit}
                    products={products}
                    setProducts={setProducts}
                />
                <FridgeItems
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                    products={products}
                />
            </div>

        </div>
    );
}

export default App;
