import { connect } from 'react-redux';

import SideMenu from './SideMenu';

const getMenuPermissions = login => {
  const { userCredentials } = login;
  const { user } = userCredentials;
  const { role } = user;

  return role.permissions;
};

const mapStateToProps = ({ menu, location, login }) => ({
  location,
  collapsed: menu.collapsed,
  permissions: getMenuPermissions(login)
});

export default connect(
  mapStateToProps,
  null
)(SideMenu);
