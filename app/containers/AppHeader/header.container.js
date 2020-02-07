// import { bindActionCreators } from 'redux';
import t from 'typy';
import { connect } from 'react-redux';
import { toggleMenu } from '../SideMenu/actions';

import Header from './header.component';

const mapStateToProps = ({ menu, login }) => ({
  collapsed: menu.collapsed,
});

const mapDispatchToProps = {
  toggleMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
