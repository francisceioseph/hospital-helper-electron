import { connect } from "react-redux";

import Home from "./components/home.component";
import { pickBy } from "../../utils";

const mapStateToProps = ({ login }) => ({});

export default connect(
  mapStateToProps,
  null
)(Home);
