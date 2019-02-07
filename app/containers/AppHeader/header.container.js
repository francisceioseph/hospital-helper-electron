// import { bindActionCreators } from 'redux';
import t from 'typy';
import { connect } from 'react-redux';
import { toggleMenu } from '../SideMenu/actions';
import { clearCredentials } from '../../pages/Login/login.actions';

import Header from './header.component';

const mapStateToProps = ({ menu, login }) => ({
  collapsed : menu.collapsed,
  profile   : t(login, 'credentials.user.profile').safeObject
});

const mapDispatchToProps = {
  toggleMenu,
  clearCredentials
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
