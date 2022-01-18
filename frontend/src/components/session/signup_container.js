import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = (state) => {

  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => {
    
  return {
    signup: user => dispatch(signup(user))
  }
}

export default connect(mSTP,mDTP)(Signup);