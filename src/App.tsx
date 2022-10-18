import { useState } from "react";
import "./styles/App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";
import FridgeItems from "./components/FridgeItems";
import { IFormFields } from "./interfaces/ProductInfo";
import * as React from "react";

function App() {
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
        <div className="App">
            <Nav />
            <Form
                edit={edit}
                resetEdit={setEdit}
                products={products}
                setProducts={setProducts}
            />
            <FridgeItems
                handleEdit={handleEdit}
                handleRemove={handleRemove}
                products={products.slice(-2).reverse()}
            />
        </div>
    );
}

export default App;
