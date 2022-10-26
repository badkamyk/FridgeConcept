import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { recipesData } from "../recipesData";
import "../styles/RecipesDetails.css";
import * as React from "react";
import Button from "../components/componentElements/Form/Button";
import { IFormFields } from "../interfaces/ProductInfo";

type RecipeDetailsParams = {
    id: string;
    productName: string;
    amount: number;
    chosenMeasure: string;
}

function RecipesDetails() {
    const { id } = useParams();
    const { products, cart, setCart } = useContext(Context);

    const recipe = recipesData.find(recipe => recipe.id === id);

    // console.log("cart", cart)

    const checkIfProductExists = (item: IFormFields[] | RecipeDetailsParams[], productName: string) => {
        return item.find(product => product.productName.toLowerCase() === productName.toLowerCase());
    }

    const subtractAmountWithRecipe = (productName: string) => {
        const productInProducts = checkIfProductExists(products, productName);
        const productInRecipe = recipe?.ingredients.find(product => product.productName.toLowerCase() === productName.toLowerCase());
        if (productInProducts && productInRecipe) {
            return productInProducts.amount - productInRecipe.amount;
        } else if (productInRecipe) {
            return 0 - productInRecipe?.amount;
        } else {
            return 0;
        }
    }

    const handleIcons = (productName: string) => {
        if (!!checkIfProductExists(products, productName) && subtractAmountWithRecipe(productName) >= 0) {
            return "fa fa-check checked";
        } else if (!!checkIfProductExists(cart, productName)) {
            return "fa fa-cart-plus checked";
        } else {
            return "fa fa-cart-plus";
        }
    }

    const checkIfEveryProductInCart = (ingredients: RecipeDetailsParams[]) => {
        return ingredients.every(ingredient => !!checkIfProductExists(cart, ingredient.productName));
    }

    const checkIfEveryProductinProducts = (ingredients: RecipeDetailsParams[]) => {
        return ingredients.every(ingredient => !!checkIfProductExists(products, ingredient.productName) && subtractAmountWithRecipe(ingredient.productName) >= 0);
    }

    const addRemoveAllProductsFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (recipe && e.currentTarget.textContent === "Add all missing products to cart") {
            const productsToAdd = recipe.ingredients.filter(product =>
                (subtractAmountWithRecipe(product.productName) < 0 && !checkIfProductExists(cart, product.productName)));
            const changeAmount = productsToAdd.map(product => {
                return { ...product, amount: Math.abs(subtractAmountWithRecipe(product.productName)) }
            }
            )
            e.currentTarget.textContent = "Remove all products from cart";
            setCart([...cart, ...changeAmount]);
        } else {
            e.currentTarget.textContent = "Add all missing products to cart";
            setCart(cart.filter(product => !recipe?.ingredients.some(ingredient => checkIfProductExists([product], ingredient.productName))));
        }
    }

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, recipeProduct: { id: string; productName: string; amount: number; chosenMeasure: string; }) => {
        if (checkIfProductExists(cart, recipeProduct.productName)) {
            setCart(cart.filter(product => product.productName !== recipeProduct.productName));
        } else {
            setCart([...cart, {
                ...recipeProduct,
                amount: Math.abs(subtractAmountWithRecipe(recipeProduct.productName))
            }]);
        }
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
                <img className="recipes-details--image" src={recipe?.image} alt={recipe?.productName} />
                <div className="recipes-details--ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe?.ingredients.map((ingredient) => {
                            return <li className="align-list" key={ingredient.productName}>
                                <Button className="recipes-details--add-button"
                                    onClick={e => handleAddToCart(e, ingredient)}
                                    text={<i
                                        className={handleIcons(ingredient.productName)}
                                        style={{ fontSize: "33px" }}></i>} />
                                {ingredient.productName}
                                <span> {ingredient.amount} {ingredient.chosenMeasure}</span>
                                <span
                                    className="recipes-details--amount"> {subtractAmountWithRecipe(ingredient.productName) < 0 &&
                                        `You need ${subtractAmountWithRecipe(ingredient.productName) * -1} more ${ingredient.chosenMeasure}`} </span>
                            </li>
                        })}
                    </ul>
                    <Button disabled={recipe && checkIfEveryProductinProducts(recipe.ingredients)} onClick={addRemoveAllProductsFromCart} className={"recipes-details--ingredients--btn"}
                        text={recipe ? checkIfEveryProductinProducts(recipe.ingredients) ? "You have all needed products" : checkIfEveryProductInCart(recipe.ingredients)
                            ? "Remove all products from cart"
                            : "Add all missing products to cart"
                            : null} />
                    <Link to="/cart" className="cart--link">Go to shopping cart</Link>

                </div>
            </div>
            <p className="recipes-details--description">{recipe?.description}</p>
        </div>
    );
}

export default RecipesDetails;
