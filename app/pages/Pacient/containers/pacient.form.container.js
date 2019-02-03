import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';

import { createPacient } from '../pacient.actions';
import { PacientFormComponent } from '../components';

import * as WebAPI from '../../../utils/webAPI';
import * as Alerts from '../../../components/Alerts';

const mapStateToProps = ({ pacients }) => ({
  pacient: pacients.pacient
});

const mapDispatchToProps = {
  createPacient
};

const onNewPacientFormSubmit = props => async (values, form) => {
  try {
    const { phone, email, address, ...others } = values; 
    const pacient = {
      ...others,
      emails_attributes     : !!email   ? [{ address: email }] : [],
      telephones_attributes : !!phone   ? [{ number: phone }] : [],
      addresses_attributes    : !!address ? [{ ...address }]: [],
    };

    const { data } = await WebAPI.postPacient(pacient);

    props.createPacient(data);
    Alerts.success({
      onOk: () => form.resetFields()
    });
  } catch (error) {
    console.log(error);
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
