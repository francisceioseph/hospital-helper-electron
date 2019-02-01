import { connect } from 'react-redux';

import Home from './components/home.component';

const getMenuPermissions = login => {
  const { credentials } = login;
  const { user } = credentials;
  const { role } = user;

  return role.permissions;
};

const mapStateToProps = ({ login }) => ({
  permissions: []
});

export default connect(
  mapStateToProps,
  null
)(Home);
