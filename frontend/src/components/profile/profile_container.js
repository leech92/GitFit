import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { follow } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user, 
    users: state.entities.users, 
    // buddy: state.entities.users[.match.params.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()), 
  follow: (obj) => dispatch(follow(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);