import React from "react";

class UpdateMealplanForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.mealplan.name,
            mealplanType: this.props.mealplan.mealplanType,
            calories: this.props.mealplan.calories,
            protein: this.props.mealplan.protein,
            carbs: this.props.mealplan.carbs,
            fat: this.props.mealplan.fat,
            description: this.props.mealplan.description,
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeMealPlanErrors();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            id: this.props.mealplan._id,
            name: this.state.name,
            mealplanType: this.state.mealplanType,
            calories: this.state.calories,
            protein: this.state.protein,
            carbs: this.state.carbs,
            fat: this.state.fat,
            description: this.state.description
        }
        this.props.editMealplan(data).then(() => {
            if (this.state.errors.length === 0) {
                this.props.closeModal()
            } 
        })
        // window.location.reload();
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} className="mealplan-errors">
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="edit-mealplan-container">
                <form className="edit-mealplan-form" onSubmit={this.handleSubmit}>
                    <h1>Edit Mealplan</h1>
                    <div className="edit-mealplan-name">
                        <p>Meal Plan Name</p>
                        <input type="text" value={this.state.name} onChange={this.update('name')}/>
                    </div>
                    <div className="edit-mealplan-type">
                        <p>Meal Plan Type</p>
                        <input type="text" value={this.state.mealplanType} onChange={this.update('mealplanType')}/>
                    </div>
                    <div className="edit-mealplan-calories">
                        <p>Daily Calories</p>
                        <input type="text" value={this.state.calories} onChange={this.update('calories')}/>
                    </div>
                    <div className="edit-mealplan-protein">
                        <p>Daily Protein</p>
                        <input type="text" value={this.state.protein} onChange={this.update('protein')}/>
                    </div >
                    <div className="edit-mealplan-carbs">
                        <p>Daily Carbs</p>
                        <input type="text" value={this.state.carbs} onChange={this.update('carbs')}/>
                    </div>
                    <div className="edit-mealplan-fat">
                        <p>Daily Fat</p>
                        <input type="text" value={this.state.fat} onChange={this.update('fat')}/>
                    </div>
                    <div className="edit-mealplan-desc">
                        <p>Meal Plan Description</p>
                        <input type="text" value={this.state.description} onChange={this.update('description')}/>
                    </div>
                    <button className="edit-mealplan-exit" onClick={this.props.closeModal}>Exit</button>
                    {this.renderErrors()}
                    <button>Submit</button>
               </form>
            </div>
        )
    }
}

export default UpdateMealplanForm;