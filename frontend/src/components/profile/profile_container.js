import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);