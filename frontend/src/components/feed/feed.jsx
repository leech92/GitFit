import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAllMealplans } from "../../actions/mealplan_actions";
import { fetchAllWorkouts } from "../../actions/workout_actions";
import { fetchUsers } from "../../actions/user_actions";
import '../../stylesheets/feed.css'

const mSTP = state => ({
    allMealplans: state.entities.mealplans.all,
    allWorkouts: state.entities.workouts.all,
    allUsers: state.entities.users,
    currentUserId: state.session.user.id
});

const mDTP = dispatch => ({
    fetchAllMealplans: () => dispatch(fetchAllMealplans()),
    fetchAllWorkouts: () => dispatch(fetchAllWorkouts()),
    fetchUsers: () => dispatch(fetchUsers())
});

class Feed extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllMealplans();
        this.props.fetchAllWorkouts();
        this.props.fetchUsers();
    }

    render() {
        const { allUsers, allMealplans, allWorkouts, currentUserId} = this.props;
        if (!Object.keys(allMealplans).length || !Object.keys(allWorkouts).length || !allUsers.length) {
            return null
        }
        const currentUser = allUsers.filter(user => user._id === currentUserId)[0]
        if (!currentUser) return null


        const buddiesMealplans = allMealplans.filter(mealplan => currentUser.following.includes(mealplan.user))
        const buddiesWorkouts = allWorkouts.filter(workout => currentUser.following.includes(workout.user))
        const buddiesFeed = buddiesMealplans.concat(buddiesWorkouts)


        const feed = [];
        while (feed.length < 10 && buddiesFeed.length) {
            let random = buddiesFeed[Math.floor(Math.random() * buddiesFeed.length)]
            let type = random.mealplanType? 'Mealplan' : 'Workout'
            let typeName = random.mealplanType? random.name : random.title
            let userId = random.user
            let itemId = random._id
            let buddyName = allUsers.filter(user => user._id === userId)[0].username;
            let userPhoto = allUsers.filter(user => user._id === userId)[0].photo;
            let obj = {name: buddyName, type: type, data: random, typeName: typeName, itemId: itemId, userPhoto: userPhoto}
            feed.push(obj)
            buddiesFeed.splice(buddiesFeed.indexOf(random),1)
        }

        const feedItem = (item) => {

            return (
                <div className="feed-item">
                    <div className="feed-buddy-container">
                         <img src= {item.userPhoto} alt="" className="feed-user-photo"/>
                         <h1>Check out {item.name}'s {item.type}: </h1>
                    </div>
                   
                    <div className="feed-data">
                        <h3>{item.typeName} </h3>
                        <img src={item.data.photo} alt="Photo" className = "feed-img" />
                    </div>
                </div>
            )
        }

        return (
            <div className="feed-container">
                <div className = "feed-content-container">
                <h1 id="feed">Here's what's going on in the GitFit Community</h1>
                {feed.map(item => {

                    return (
                         item.type === 'Mealplan' ?
                            // <Link key={item.id} to={`mealplans/${item.itemId}`}><div className="feed-item">Check out {item.name}'s {item.type}: {item.typeName} </div></Link>
                            <Link key={item.id} to={`mealplans/${item.itemId}`}>{feedItem(item)}</Link>
                            : <Link key={item.id} to={`workouts/${item.itemId}`}>{feedItem(item)}</Link>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Feed);