import { connect } from 'react-redux';
import Splash from './splash';
import { signup, login } from '../../actions/session_actions';

const mDTP = (dispatch) => {

    return {
        login: user => dispatch(login(user)),
        signup: user => dispatch(login(user))
    }
}

export default connect(null,mDTP)(Splash);