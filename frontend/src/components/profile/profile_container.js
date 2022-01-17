import { profileEnd } from 'console';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import profile from './profile';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);