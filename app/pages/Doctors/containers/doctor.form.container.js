import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';

import { createDoctor } from '../doctors.actions';
import { DoctorFormComponent } from '../components';
import { postDoctor } from '../doctors.service';

import * as Alert from '../../../components/Alerts';

const mapStateToProps = ({ pacients }) => ({
  pacient: pacients.pacient
});

const mapDispatchToProps = {
  createDoctor
};

const onNewDoctorFormSubmit = () => async (values, form) => {
  try {
    await postDoctor(values);

    Alert.success({
      content : 'Cadastro realizado com sucesso',
      onOk    : () => form.resetFields()
    });
  } catch (error) {
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
