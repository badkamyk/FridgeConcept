import {useParams} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../Context";
import {recipesData} from "../recipesData";
import "../styles/RecipesDetails.css";
import * as React from "react";
import Button from "../components/componentElements/Form/Button";
import {Option} from "../types/MeasureTypes";

function RecipesDetails() {
    const {id} = useParams();
    const {products, cart, setCart} = useContext(Context);

    const recipe = recipesData.find(recipe => recipe.id === id);

    // export interface IFormFields {
    //     productName: string;
    //     amount: number;
    //     measureTypes?: string[];
    //     chosenMeasure: Option | "";
    //     id: string;
    // }
    console.log(cart)
    const toggleActiveAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle("activeCart");
    }

    const checkIfProductInCart = (productName: string) => {
        const productInCart = cart.find(product => product.productName.toLowerCase() === productName.toLowerCase());
        return !!productInCart;
    }

    const checkIfProductInProducts = (productName: string) => {
        const productInProducts = products.find(product => product.productName.toLowerCase() === productName.toLowerCase());
        return !!productInProducts;
    }

    const handleIcons = (productName: string) => {
        if (checkIfProductInProducts(productName)) {
            return "fa fa-check checked";
        } else if (checkIfProductInCart(productName)) {
            // return "fa fa-check checked";
            return "fa fa-cart-plus checked";
        } else {
            return "fa fa-cart-plus";
        }
    }

    const addRemoveAllProductsFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (recipe && e.currentTarget.textContent === "Add all missing products to cart") {
            const productsToAdd = recipe.ingredients.filter(product => !checkIfProductInCart(product.productName) && !checkIfProductInProducts(product.productName));
            e.currentTarget.textContent = "Remove all products from cart";
            const productsToAddToCart = productsToAdd.map(product => {
                    return {
                        productName: product.productName,
                        amount: product.amount,
                        measureTypes: product.chosenMeasure,
                        chosenMeasure: product.chosenMeasure,
                        id: product.id,
                    }
                }
            )
            setCart([...cart, ...productsToAdd]);
        } else {
            e.currentTarget.textContent = "Add all missing products to cart";
            setCart(cart.filter(product => !recipe?.ingredients.some(ingredient => ingredient.productName.toLowerCase() === product.productName.toLowerCase())));
        }
    }

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, recipeProduct: { id: string; productName: string; amount: number; chosenMeasure: string; }) => {
        e.preventDefault();
        if (checkIfProductInCart(recipeProduct.productName)) {
            setCart(cart.filter(product => product.productName !== recipeProduct.productName));
            // setCart(prevCart => prevCart.map(product => {
            //     if (product.productName === recipeProduct.productName && product.chosenMeasure === recipeProduct.chosenMeasure && product.amount === recipeProduct.amount) {
            //         return {...product, amount: product.amount + recipeProduct.amount}
            //     }
            //     return product;
            // })

        } else {
            setCart([...cart, recipeProduct])
        }

        // toggleActiveAddToCart(e);
    }

    return (
        <div className="recipes-details--container">
            <h1 className="recipes-details--title">{recipe?.productName}</h1>
            <div className="recipes-details--tags">
                {recipe?.tags.map(tag => (
                    <span className="recipes-details--tag" key={tag}>{tag}</span>
                ))}
            </div>
            <div className="recipes-details--image-ingredients-container">
                <img className="recipes-details--image" src={recipe?.image} alt={recipe?.productName}/>
                <div className="recipes-details--ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe?.ingredients.map((ingredient) => {
                            return <li className="align-list" key={ingredient.productName}>
                                <Button className="recipes-details--add-button"
                                        onClick={e => handleAddToCart(e, ingredient)}
                                        text={<i
                                            // className={checkIfProductInCart(ingredient.productName) ? "fa fa-check" : "fa fa-cart-plus"}
                                            className={handleIcons(ingredient.productName)}
                                            style={{fontSize: "33px"}}></i>}/>
                                {ingredient.productName}
                                {/*thumbs-up*/}
                                <span> {ingredient.amount} {ingredient.chosenMeasure}</span>
                            </li>
                        })}
                    </ul>
                    <Button onClick={addRemoveAllProductsFromCart} className={"recipes-details--ingredients--btn"}
                            text={"Add all missing products to cart"}/>
                </div>
            </div>
            <p className="recipes-details--description">{recipe?.description}</p>
        </div>
    );
}

export default RecipesDetails;
