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
        debugger
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
        const mealplanType = (type) => {
            if (type === this.state.mealplanType) {
                return <option value={type} selected>{type}</option>
            } else{
                return <option value={type}>{type}</option>
            }
        }

        return (
            <div className="edit-mealplan-container">
                <form className="edit-mealplan-form" onSubmit={this.handleSubmit}>
                    <div className="in-form">
                        <h1>Edit Mealplan</h1>
                        <div className="edit-mealplan-name">
                            <p>Meal Plan Name</p>
                            <input className="inp-mp" type="text" value={this.state.name} placeholder={this.state.name} onChange={this.update('name')}/>
                        </div>
                        <div className="edit-mealplan-type">
                            <p>Meal Plan Type</p>
                            <select className="inp-select" onChange={this.update('mealplanType')}>
                                {/* <option disabled value="">Choose Mealplan Type</option> */}
                                {mealplanType("Cut")}
                                {mealplanType("Bulk")}
                                {mealplanType("Super Bulk")}
                                {mealplanType("Healthy")}
                            </select>
                        </div>
                        <div className="edit-mealplan-calories">
                            <p>Daily Calories</p>
                            <input className="inp-mp" type="number" min={0.00} value={this.state.calories} placeholder={this.state.calories} onChange={this.update('calories')}/>
                            {/* <input type="text" value={this.state.calories} onChange={this.update('calories')}/> */}
                        </div>
                        <div className="edit-mealplan-protein">
                            <p>Daily Protein</p>
                            <input className="inp-mp" type="number" min={0.00} value={this.state.protein} placeholder={this.state.protein} onChange={this.update('protein')}/>
                            {/* <input type="text" value={this.state.protein} onChange={this.update('protein')}/> */}
                        </div >
                        <div className="edit-mealplan-carbs">
                            <p>Daily Carbs</p>
                            <input className="inp-mp" type="number" min={0.00} value={this.state.carbs} placeholder={this.state.carbs} onChange={this.update('carbs')}/>
                            {/* <input type="text" placeholder={this.state.carbs} onChange={this.update('carbs')}/> */}
                        </div>
                        <div className="edit-mealplan-fat">
                            <p>Daily Fat</p>
                            <input className="inp-mp" type="number" min={0.00} value={this.state.fat} placeholder={this.state.fat} onChange={this.update('fat')}/>
                            {/* <input type="text" value={this.state.fat} onChange={this.update('fat')}/> */}
                        </div>
                        <div className="edit-mealplan-desc">
                            <p>Meal Plan Description</p>
                            <textarea className="inp-mp" id="txt-area" type="text" value={this.state.description} placeholder={this.state.description} onChange={this.update('description')}/>
                            {/* <input type="text" value={this.state.description} onChange={this.update('description')}/> */}
                        </div>
                        {/* <button className="edit-mealplan-exit" onClick={this.props.closeModal}>Exit</button> */}
                        {this.renderErrors()}
                        <button id="sub-create">Submit</button>
                    </div>
               </form>
            </div>
        )
    }
}

export default UpdateMealplanForm;