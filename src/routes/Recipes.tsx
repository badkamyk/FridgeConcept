import Input from "../components/componentElements/Form/Input.js"
import * as React from "react";
import {recipesData, tags} from "../recipesData";
import "../styles/Recipes.css";
import Button from "../components/componentElements/Form/Button";
import {Link} from "react-router-dom";

export default function Recipes() {
    const [mealInput, setMealInput] = React.useState("");
    const [mealTag, setMealTag] = React.useState<string[]>([]);

    const handleMealInput = (recipe: { id: string, name: string, tags: string[], description: string, ingredients: {} }) => {
        return recipe.productName.toLowerCase().includes(mealInput.toLowerCase())
    }

    const filterRecipes = () => {
        return recipesData.filter((recipe) => {
            if (mealTag.length) {
                return handleMealInput(recipe) && recipe.tags.some((tag) => mealTag.includes(tag));
            }
            return handleMealInput(recipe);
        });
    }

    const toggleActiveClass = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle("active");
        if (mealTag.includes(e.currentTarget.innerText)) {
            setMealTag(mealTag.filter((tag) => tag !== e.currentTarget.innerText));
        } else {
            setMealTag([...mealTag, e.currentTarget.innerText]);
        }
    }

    return (
        <div style={{padding: "1em"}}>
            <h1>Recipes</h1>
            <Input
                placeholder="Search for a meal"
                id="mealName"
                className={"recipeSearchInput"}
                name="mealName"
                type="text"
                value={mealInput}
                onChange={(e) => setMealInput(e.target.value)}
            />
            {tags.map((tag) => {
                return <Button onClick={toggleActiveClass} key={`${tag}btn`} className={"tag-button"} text={tag}/>
            })}
            {mealInput ? filterRecipes().map((recipe) => {
                return (
                    <Link to={recipe.id} key={recipe.id}>
                        <div className={"recipeItem"}>
                            <h2 style={{marginBottom: "9px"}}>{recipe.productName}</h2>
                            <div>
                                {recipe.tags.map((tag) => {
                                    return <span style={mealTag.includes(tag) ? {background: "#41adad"} : undefined}
                                                 className={"recipeItem--tag"} key={tag}>{tag} </span>
                                })}
                            </div>
                        </div>
                    </Link>
                );
            }) : null}
        </div>
    );
}
