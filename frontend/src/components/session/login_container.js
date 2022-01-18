import { connect } from 'react-redux';
import Login from './login'
import { login } from '../../actions/session_actions';

const mSTP = (state) => {
    
    return {
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {

    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP,mDTP)(Login);