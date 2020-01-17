import { connect } from 'react-redux';
import { allUsers } from './../../actions/session_actions';
import UsersIndex from './users_index';

const mapStateToProps = state => {
  return {
    users: Object.values(state.entities.users)
  }
};

const mapDispatchToProps = dispatch => ({
  allUsers: () => dispatch(allUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);