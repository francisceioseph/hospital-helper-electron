import { connect } from 'react-redux';

import Home from './components/home.component';
import { pickBy } from '../../utils';


const getMenuPermissions = login => {
  const { credentials } = login;
  const { user } = credentials;
  const { role } = user;

  return pickBy(role.permissions, 'resource_name');
};

const mapStateToProps = ({ login }) => ({
  permissions: getMenuPermissions(login),
});

export default connect(
  mapStateToProps,
  null
)(Home);
