import {useParams} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../Context";
import {recipesData} from "../recipesData";
import "../styles/RecipesDetails.css";

function RecipesDetails() {
    const {id} = useParams();
    const {products} = useContext(Context);

    const recipe = recipesData.find(recipe => recipe.id === id);
    return (
        <div className="recipes-details--container">
            <h1 className="recipes-details--title">{recipe?.name}</h1>
            <div className="recipes-details--tags">
                {recipe?.tags.map(tag => (
                    <span className="recipes-details--tag" key={tag}>{tag}</span>
                ))}
            </div>
            <div className="recipes-details--image-ingredients-container">
                <img className="recipes-details--image" src={recipe?.image} alt={recipe?.name}/>
                <div className="recipes-details--ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe?.ingredients.map((ingredient) => {
                            return <li className="align-list" key={ingredient.name}>
                                <button className="recipes-details--add-button"><i className="fa fa-cart-plus"
                                                                                   style={{fontSize: "33px"}}></i>
                                </button>
                                {ingredient.name}
                                {/*thumbs-up*/}
                                <span> {ingredient.amount} {ingredient.measurement}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <p className="recipes-details--description">{recipe?.description}</p>
        </div>
    );
}

export default RecipesDetails;
