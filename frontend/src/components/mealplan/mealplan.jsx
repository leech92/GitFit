import React from "react";

class Mealplan extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMealplan();
    }

    render() {
        if (!this.props.mealplan) return null;

        const { mealplan } = this.props;

        return (
            <div className="mealplan-container">
                <h1 className="mealplan-title">
                    {mealplan.name}
                    mealplan name
                </h1>
                <p>
                    
                </p>
                <p className="mealplan-calories">
                    {mealplan.calories}
                    mealplan calories
                </p>
            </div>
        )
    }
}