import React from "react";

class CreateMealplanForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            mealplanType: '',
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            user: this.props.userId,
            name: this.state.name,
            mealplanType: this.state.mealplanType,
            calories: this.state.calories,
            protein: this.state.protein,
            carbs: this.state.carbs,
            fat: this.state.fat,
            description: this.state.description
        }
        debugger
        this.props.generateMealplan(data)
    }

    render() {
        return (
           <div className="create-mealplan-container">
               <form className="create-mealplan-form" onSubmit={this.handleSubmit}>
                    <h1>Create Mealplan</h1>
                    <div className="create-mealplan-name">
                        <p>Meal Plan Name</p>
                        <input type="text" value={this.state.name} onChange={this.update('name')}/>
                    </div>
                    <div className="create-mealplan-type">
                        <p>Meal Plan Type</p>
                        <input type="text" value={this.state.mealplanType} onChange={this.update('mealplanType')}/>
                    </div>
                    <div className="create-mealplan-calories">
                        <p>Daily Calories</p>
                        <input type="text" value={this.state.calories} onChange={this.update('calories')}/>
                    </div>
                    <div className="create-mealplan-protein">
                        <p>Daily Protein</p>
                        <input type="text" value={this.state.protein} onChange={this.update('protein')}/>
                    </div >
                    <div className="create-mealplan-carbs">
                        <p>Daily Carbs</p>
                        <input type="text" value={this.state.carbs} onChange={this.update('carbs')}/>
                    </div>
                    <div className="create-mealplan-fat">
                        <p>Daily Fat</p>
                        <input type="text" value={this.state.fat} onChange={this.update('fat')}/>
                    </div>
                    <div className="create-mealplan-desc">
                        <p>Meal Plan Description</p>
                        <input type="text" value={this.state.description} onChange={this.update('description')}/>
                    </div>
                    <button className="create-mealplan-exit" onClick={this.props.closeModal}>Exit</button>
                    <button>Submit</button>
               </form>
           </div> 
        )
    }
}

export default CreateMealplanForm;