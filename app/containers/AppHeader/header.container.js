// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMenu } from '../SideMenu/actions';
import { clearCredentials } from '../../pages/Login/login.actions';

import Header from './header.component';

const getProfileData = ({ credentials }) => {
  const { user } = credentials;
  return user ? user.profile : { full_name: '' };
};

const mapStateToProps = ({ menu, login }) => ({
  collapsed: menu.collapsed,
  profile: getProfileData(login)
});

const mapDispatchToProps = {
  toggleMenu,
  clearCredentials
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
