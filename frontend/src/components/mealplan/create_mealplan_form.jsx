import React from "react";

class CreateMealplanForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.userId,
            name: '',
            mealplanType: '',
            calories: 0,
            protein: 0,
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
            name: this.state.name,
            mealplanType: this.state.mealplanType,
            calories: this.state.calories,
            protein: this.state.protein,
            fat: this.state.fat,
            description: this.state.description
        }

        this.props.generateMealplan(data)
    }

    render() {
        return (
           <div className="create-mealplan-container">
               <form action="">

               </form>
           </div> 
        )
    }
}