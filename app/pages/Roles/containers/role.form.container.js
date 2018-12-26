import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';

import { createRole } from '../roles.actions';
import RoleForm from '../components/role.form.component';

import * as WebAPI from '../../../utils/webAPI';
import * as Alert from '../../../components/Alerts';

const mapStateToProps = ({ roles }) => ({
  role: roles.role,
});

const mapDispatchToProps = {
  createRole,
};

const onNewRoleFormSubmit = props => async(values, form) => {
  try {
    const { data: role } = await WebAPI.createRole(values);

    Alert.success({
      content: 'Cadastro realizado com sucesso',
      onOk: () => {
        props.createRole(role);
        form.resetFields();
      },
    });
  } catch (error) {
    Alert.error();
  }
};

const withFormHandlers = withHandlers({
  onSubmitHandler: onNewRoleFormSubmit,
});

const RoleFormWrapper = compose(withFormHandlers)(RoleForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoleFormWrapper);
