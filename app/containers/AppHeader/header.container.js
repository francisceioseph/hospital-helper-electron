// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMenu } from '../SideMenu/actions';
import { clearUserCredentials } from '../../pages/Login/login.actions';

import Header from './header.component';

const getProfileData = ({ userCredentials }) => {
  const { user } = userCredentials;
  return user ? user.profile : { full_name: '' };
};

const mapStateToProps = ({ menu, login }) => ({
  collapsed: menu.collapsed,
  profile: getProfileData(login)
});

const mapDispatchToProps = {
  toggleMenu,
  clearUserCredentials
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
