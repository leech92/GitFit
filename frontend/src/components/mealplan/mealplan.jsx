import React from 'react';
import Meals from './meals';
import "../../stylesheets/mealplan.css";

class Mealplan extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchMealplan(this.props.match.params.id);
        this.props.fetchMealplanMeals(this.props.match.params.id);
    }

    handleDelete() {
        
        this.props.destroyMealplan(this.props.match.params.id)
            .then(() => this.props.history.push('/profile'))
    }

    render() {
        if (!this.props.mealplan) return null;

        const { mealplan, meals } = this.props;

        return(
            <div className="mealplan-container">
                <h1 className="mealplan-title">{mealplan.name}</h1>
                <div className="mealplan-description">
                    <h2 className="mealplan-goal-head">Meal Plan Goal</h2>
                    <p className="mealplan-type">{mealplan.mealplanType}</p>
                    <h2 className="mealplan-desc-head">Meal Plan Description</h2>
                    <p className="mealplan-desc">{mealplan.description}</p>
                </div>
                <div className="mealplan-nutrition">
                    <h2 className="mealplan-nutri-head">Meal Plan Daily Nutrition</h2>
                    <p className="mealplan-calories">{mealplan.calories} calories</p>
                    <p className="mealplan-protein">Protein: {mealplan.protein} grams</p>
                    <p className="mealplan-carbs">Carbs: {mealplan.carbs} grams</p>
                    <p className="mealplan-fat">Fat: {mealplan.fat} grams</p>
                </div>
                {/* <button onClick={() => this.props.openModal('update mealplan')}>Edit Meal Plan</button> */}
                <button onClick={this.handleDelete}>Delete Mealplan</button>
                <Meals meals={meals}/>
            </div>
        )
    }
}

export default Mealplan;