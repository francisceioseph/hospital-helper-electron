import { connect } from "react-redux";

import SideMenu from "./SideMenu";
import { pickBy } from "../../utils";

const mapStateToProps = ({ menu, location, login }) => ({
  location,
  collapsed: menu.collapsed
});

export default connect(
  mapStateToProps,
  null
)(SideMenu);
