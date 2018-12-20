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
    const pacient = {
      profile: {
        ...values.profile,
        profile_type_id: 6
      }
    };
    const { data } = await WebAPI.postPacient(pacient);

    props.createPacient(data.profile);
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
