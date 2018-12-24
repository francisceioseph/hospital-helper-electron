import { connect } from 'react-redux';

import Home from './components/home.component';

const getMenuPermissions = login => {
  const { userCredentials } = login;
  const { user } = userCredentials;
  const { role } = user;

  return role.permissions;
};

const mapStateToProps = ({ login }) => ({
  permissions: getMenuPermissions(login)
});

export default connect(
  mapStateToProps,
  null
)(Home);
