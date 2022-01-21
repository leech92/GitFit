import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { follow } from '../../actions/user_actions'
import { fetchUsers } from '../../actions/user_actions';
import { fetchUserMealplans } from '../../actions/mealplan_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUserWorkout } from '../../actions/workout_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user, 
    users: state.entities.users, 
    // buddy: state.entities.users[.match.params.id]
    mealplans: state.entities.mealplans.user,
    workouts: state.entities.workouts.user
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()), 
  follow: (obj) => dispatch(follow(obj)),
  fetchUserMealplans: id => dispatch(fetchUserMealplans(id)),
  openModal: modal => dispatch(openModal(modal)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserWorkout: id => dispatch(fetchUserWorkout(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);