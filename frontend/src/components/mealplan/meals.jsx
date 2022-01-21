import React from "react";
import "../../stylesheets/meals.css";

class Meals extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { meals } = this.props;

        return(
            <div className="meals-container">
                <h1 className="meals-container-head">Meals</h1>
                <div className="meals-flex">
                {meals.map((meal, idx) => {
                    return(
                        <div key={idx} className="meal-container">
                            <img className="meal-photo" src={meal.photo}/>
                            <div className="meal-right">
                                <h1 className={`meal-category-${meal.mealType}`}>{meal.mealType}</h1>
                                <h2 className="meal-name">{meal.name}</h2>
                                <p className="meal-calories">{meal.calories} calories</p>
                                <p className="meal-protein">Protein: {meal.protein} grams</p>
                                <p className="meal-carbs">Carbs: {meal.carbs} grams</p>
                                <p className="meal-fat">Fat: {meal.fat} grams</p>
                                <p className="meal-desc">{meal.description}</p>
                                <p className="meal-ingredients">Ingredients: {meal.ingredients}</p>
                            </div>
                        </div>
                    )
                })}    
                </div>
            </div>
        )
    }
}

export default Meals;