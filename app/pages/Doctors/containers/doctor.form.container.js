import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';

import { createDoctor } from '../doctors.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

import { DoctorFormComponent } from '../components';

import * as WebAPI from '../../../utils/api.service';
import * as Alert from '../../../components/Alerts';

const mapStateToProps = ({ pacients }) => ({
  pacient: pacients.pacient
});

const mapDispatchToProps = {
  createDoctor,
  showPageLoader,
  hidePageLoader
};

const onNewDoctorFormSubmit = (props) => async (values, form) => {
  props.showPageLoader();
  try {
    const user = {
      ...values,
      profile: {
        profile_type   : 'Doctor',
        personal_datum : {
          ...values.personal_datum
        }
      }
    };

    await WebAPI.postUser(user);

    props.hidePageLoader();
    Alert.success({
      content : 'Cadastro realizado com sucesso',
      onOk    : () => form.resetFields()
    });
  } catch (error) {
    props.hidePageLoader();
    Alert.error();
  }
};

const withFormHandlers = withHandlers({
  onSubmitHandler: onNewDoctorFormSubmit
});

const DoctorFormWrapper = compose(withFormHandlers)(DoctorFormComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorFormWrapper);
