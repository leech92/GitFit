import React from "react";
import { Link } from "react-router-dom"
import "../../stylesheets/mealplan_preview.css";

class MealplanPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { newMealplan, mealplans } = this.props;

        return(
            <div className="mealplan-pre-container">
                <h1 className="mealplan-pre-head">My Meal Plans</h1>
                <div className="mealplan-pre-bot">
                    {mealplans.map((mealplan,idx) => {
                        return(
                            <Link key={idx} className="mealplan-pre-link" to={`/mealplans/${mealplan._id}`}>
                                <div className="mealplan-inner-link">
                                    <h1 className="mealplan-pre-name">{mealplan.name}</h1>
                                    <p className="mealplan-pre-type">Meal Plan Goal: {mealplan.mealplanType}</p>
                                    <p className="mealplan-pre-desc">{mealplan.description}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MealplanPreview;