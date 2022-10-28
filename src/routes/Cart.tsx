import { useContext, useState } from "react";
import { Context } from "../Context";
import "../styles/Cart.css";
import { IFormFields } from "../interfaces/ProductInfo";
import Button from "../components/componentElements/Form/Button";
import * as React from "react";

const Cart = () => {
    const { cart, setCart, products, setProducts } = useContext(Context);
    const [edit, setEdit] = useState<IFormFields | undefined>(undefined);

    // const editCartForm = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    //     const productToEdit = cart.find((product) => product.id === id);
    //     if (productToEdit) {
    //         setEdit(productToEdit);
    //     }
    // }

    const clearCart = () => {
        setCart([]);
    }

    const findItemInProduct = () => {
        const cartAndProducts = products.map((product) => {
            const findItem = cart.find((item) => item.productName.toLowerCase() === product.productName.toLowerCase())
            if (findItem) {
                return { ...product, amount: product.amount + findItem.amount }
            } else {
                return product
            }
        })
        const onlyInCart = cart.filter((item) => !products.find((product) => product.productName.toLowerCase() === item.productName.toLowerCase()))
        setProducts([...cartAndProducts, ...onlyInCart])
    }


    const toggleCheckedCartItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle("checked");
    }


    const cartHTMLTable = cart.map((product) => {
        return (
            <tr style={{ borderRadius: "1em" }} key={product.id}>
                <td style={{ border: "0" }}><Button
                    onClick={(e) => handleRemoveCartItem(e, product.id)}
                    text={<i className="fa fa-trash-o"></i>} className={"form--icons"}
                /></td>
                <td>{product.productName}</td>
                <td>{product.amount} {product.chosenMeasure}</td>
                <td style={{ border: "0" }}><Button onClick={toggleCheckedCartItem} text={<i className='fa fa-check'></i>}
                    className={"form--icons"} /></td>
            </tr>
        )
    }
    )
    const handleRemoveCartItem = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        const filteredProducts = cart.filter((product) => product.id !== id);
        setCart(filteredProducts);
    }

    return (
        <div className="cart--container">
            <h1>Shopping cart</h1>
            {cart.length === 0 && <p style={{marginTop: "5em", fontSize: "1.5rem"}}>Your cart is empty</p>}
            <ul>
                {cartHTMLTable}
            </ul>
            {cart.length > 0 &&
                <>
                    <Button onClick={clearCart} text={"Remove all from cart"} className={"cart--finish-btn"} />
                    <Button onClick={findItemInProduct} text={"Add all to products list"}
                        className={"cart--finish-btn"} />
                </>}
        </div>
    );
}

export default Cart;
