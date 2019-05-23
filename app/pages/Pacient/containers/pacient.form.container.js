import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';
import { createPacient } from '../pacient.actions';
import { PacientFormComponent } from '../components';

import * as WebAPI from '../../../utils/api.service';
import * as Alerts from '../../../components/Alerts';

const mapStateToProps = ({ pacients }) => ({
  pacient: pacients.pacient
});

const mapDispatchToProps = {
  createPacient, 
  showPageLoader, 
  hidePageLoader
};

const onNewPacientFormSubmit = props => async (values, form) => {
  props.showPageLoader();
  try {
    const {
      phone, email, address, ...others
    } = values;
    
    const pacient = {
      ...others,
      emails     : email ? [{ address: email }] : [],
      telephones : phone ? [{ number: phone }] : [],
      addresses  : address ? [{ ...address }] : [],
      next_of_kin: {
        full_name: values.next_of_kin.full_name || "",
        cpf: values.next_of_kin.cpf || "",
      }
    };

    const { data } = await WebAPI.postPacient(pacient);

    props.createPacient(data);
    props.hidePageLoader();
    Alerts.success({
      onOk: () => form.resetFields()
    });
  } catch (error) {
    console.log(error);
    props.hidePageLoader();
    Alerts.error();
  }
};

const withFormHandlers = withHandlers({
  onSubmitHandler: onNewPacientFormSubmit
});

const PacientFormWrapper = compose(withFormHandlers)(PacientFormComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PacientFormWrapper);
