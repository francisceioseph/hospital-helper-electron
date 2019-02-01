import { connect } from 'react-redux';

import SideMenu from './SideMenu';

const getMenuPermissions = login => {
  const { credentials } = login;
  const { user } = credentials;
  const { role } = user;

  return role.permissions;
};

const mapStateToProps = ({ menu, location, login }) => ({
  location,
  collapsed: menu.collapsed,
  permissions: []
});

export default connect(
  mapStateToProps,
  null
)(SideMenu);
