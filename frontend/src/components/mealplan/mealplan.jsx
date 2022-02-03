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

    // componentDidUpdate(prevProps) {
    //     if (this.props.mealplan !== prevProps.mealplan) {
    //         this.props.fetchMealplan(this.props.match.params.id);
    //         this.props.fetchMealplanMeals(this.props.match.params.id);
    //     }
    // }

    handleDelete() {
        
        this.props.destroyMealplan(this.props.match.params.id)
            .then(() => this.props.history.push('/profile'))
    }

    handleAdd() {
        const {mealplan, currentUserId} = this.props;
        const data = {
            user: currentUserId,
            name: mealplan.name,
            mealplanType: mealplan.mealplanType,
            calories: mealplan.calories,
            protein: mealplan.protein,
            carbs: mealplan.carbs,
            fat: mealplan.fat,
            description: mealplan.description
        };
        this.props.generateMealplan(data);

        const ele = document.getElementById('add-btn')
        ele.style.visibility = 'hidden'
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
                <button onClick={() => this.props.openModal('update mealplan')}>Edit Meal Plan</button>
                {mealplan.user === this.props.currentUserId ? <button className='mealplan-button' onClick={this.handleDelete}>Delete Mealplan</button> : <button className='mealplan-button' onClick={() => setTimeout(() => this.handleAdd(), 100)} id="add-btn">Add to my meal plan</button>}
                <Meals meals={meals}/>
            </div>
        )
    }
}

export default Mealplan;