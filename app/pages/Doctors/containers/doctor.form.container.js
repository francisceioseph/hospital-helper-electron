import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';

import { createDoctor } from '../doctors.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

import { DoctorFormComponent } from '../components';

import * as ipcService from '../../../utils/ipc.service';
import * as Alert from '../../../components/Alerts';

const mapStateToProps = ({ pacients }) => ({
  pacient: pacients.pacient
});

const mapDispatchToProps = {
  createDoctor,
  showPageLoader,
  hidePageLoader
};

const onNewDoctorFormSubmit = props => async (values, form) => {
  props.showPageLoader();
  try {
    const doctor = {
      type           : 'Doctor',
      personal_datum : {
        ...values.personal_datum,
        birth_datum: {
          ...values.personal_datum.birth_datum,
          date_of_birth: values.personal_datum.birth_datum.date_of_birth.toISOString()
        }
      }
    };

    await ipcService.createDoctor(doctor);

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
