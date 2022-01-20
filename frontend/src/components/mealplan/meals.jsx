import React from "react";

class Meals extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { meals } = this.props;

        return(
            <div className="meals-container">
                <h1 className="meals-container-head">Meals</h1>
                <div>
                {meals.map((meal, idx) => {
                    return(
                        <div key={idx} className="meal-container">
                            <h1 className={`meal-category-${meal.mealType}`}>{meal.mealType}</h1>
                            <h2>{meal.name}</h2>
                            <div className="meal-nutrition">
                                <h2 className="meal-nutri-head">Meal Nutrition</h2>
                                <p className="meal-calories">{meal.calories} calories</p>
                                <p className="meal-protein">Protein: {meal.protein} grams</p>
                                <p className="meal-carbs">Carbs: {meal.carbs} grams</p>
                                <p className="meal-fat">Fat: {meal.fat} grams</p>
                            </div>
                            <p className="meal-desc">{meal.description}</p>
                            <p className="meal-ingredients">Ingredients: {meal.ingredients}</p>
                        </div>
                    )
                })}    
                </div>
            </div>
        )
    }
}

export default Meals;