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
            description: '',
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
            user: this.props.userId,
            name: this.state.name,
            mealplanType: this.state.mealplanType,
            calories: this.state.calories,
            protein: this.state.protein,
            carbs: this.state.carbs,
            fat: this.state.fat,
            description: this.state.description
        }
        this.props.generateMealplan(data).then(() => {
            if (this.state.errors.length === 0) {
                this.props.closeModal()
                window.location.reload()
            }
        })
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
           <div className="create-mealplan-container">
               <form className="create-mealplan-form" onSubmit={this.handleSubmit}>
                   <div className="in-form">
                        <h1>Create Mealplan</h1>
                        <div className="create-mealplan-name">
                            <p className="inp-label">Meal Plan Name</p>
                            <input className="inp-mp" type="text" value={this.state.name} onChange={this.update('name')}/>
                        </div>
                        <div className="create-mealplan-type">
                            <p className="inp-label">Meal Plan Type</p>
                            <input className="inp-mp" type="text" value={this.state.mealplanType} onChange={this.update('mealplanType')}/>
                        </div>
                        <div className="create-mealplan-calories">
                            <p className="inp-label">Daily Calories</p>
                            <input className="inp-mp" type="text" value={this.state.calories} onChange={this.update('calories')}/>
                        </div>
                        <div className="create-mealplan-protein">
                            <p className="inp-label">Daily Protein</p>
                            <input className="inp-mp" type="text" value={this.state.protein} onChange={this.update('protein')}/>
                        </div >
                        <div className="create-mealplan-carbs">
                            <p className="inp-label">Daily Carbs</p>
                            <input className="inp-mp" type="text" value={this.state.carbs} onChange={this.update('carbs')}/>
                        </div>
                        <div className="create-mealplan-fat">
                            <p className="inp-label">Daily Fat</p>
                            <input className="inp-mp" type="text" value={this.state.fat} onChange={this.update('fat')}/>
                        </div>
                        <div className="create-mealplan-desc">
                            <p className="inp-label">Meal Plan Description</p>
                            <textarea className="inp-mp" id="txt-area" type="text" value={this.state.description} onChange={this.update('description')}/>
                        </div>
                        {this.renderErrors()}
                        <button id="sub-create">Submit</button>
                    </div>
               </form>
           </div> 
        )
    }
}

export default CreateMealplanForm;