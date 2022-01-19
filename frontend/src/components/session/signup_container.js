import { connect } from 'react-redux';
import { signup,login } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = (state) => {

  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => {
    
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  }
}

export default connect(mSTP,mDTP)(Signup);