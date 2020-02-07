import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';
import { createPacient } from '../pacient.actions';
import { PacientFormComponent } from '../components';

import * as ipcService from '../../../utils/ipc.service';
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
      phone, email, address, personal_datum, ...others
    } = values;

    const pacient = {
      ...others,
      personal_datum: {
        ...personal_datum,
        birth_datum: {
          ...personal_datum.birth_datum,
          date_of_birth: personal_datum.birth_datum.date_of_birth.toISOString()
        }
      },
      emails      : email ? [{ address: email }] : [],
      telephones  : phone ? [{ number: phone }] : [],
      addresses   : address ? [{ ...address }] : [],
      next_of_kin : {
        full_name : values.next_of_kin.full_name || '',
        cpf       : values.next_of_kin.cpf || '',
      }
    };

    const { data } = await ipcService.postPacient(pacient);

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
