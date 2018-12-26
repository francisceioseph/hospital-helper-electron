import { connect } from 'react-redux';
import _ from 'lodash';

import { getRoles } from '../roles.actions';
import RoleList from '../components/role.list.component';

const mapStateToProps = ({ roles }) => ({
  roles: _.values(roles.roles),
});

const mapDispatchToProps = {
  getRoles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoleList);
