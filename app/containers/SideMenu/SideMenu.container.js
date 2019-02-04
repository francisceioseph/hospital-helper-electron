import { connect } from 'react-redux';

import SideMenu from './SideMenu';
import { pickBy } from '../../utils';

const getMenuPermissions = login => {
  const { credentials } = login;
  const { user } = credentials;
  const { role } = user;

  return pickBy(role.permissions, 'resource_name');
};

const mapStateToProps = ({ menu, location, login }) => ({
  location,
  collapsed: menu.collapsed,
  permissions: getMenuPermissions(login),
});

export default connect(
  mapStateToProps,
  null
)(SideMenu);
