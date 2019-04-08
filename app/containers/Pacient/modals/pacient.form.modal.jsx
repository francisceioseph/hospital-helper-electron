// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import * as Alerts from '../../../components/Alerts';
import * as WebAPI from '../../../utils/api.service';

import { PacientModalForm } from '../../../components/Pacient';
import { createPacient } from '../../../pages/Pacient/pacient.actions';

type Props = {
  createPacient: Function,
  visible: boolean,
  onCancel: Function,
  onSubmitSuccess: Function
};

const mapStateToProps = ({ pacients }) => ({
  pacient: pacients.pacient
});

const mapDispatchToProps = {
  createPacient
};

class PacientModalFormContainer extends React.Component<Props> {
  saveFormData = async (values) => {
    const { form } = this.formRef.props;

    try {
      const {
        phone, email, address, ...others
      } = values;
      const pacient = {
        ...others,
        emails_attributes     : email ? [{ address: email }] : [],
        telephones_attributes : phone ? [{ number: phone }] : [],
        addresses_attributes  : address ? [{ ...address }] : []
      };

      const { data } = await WebAPI.postPacient(pacient);

      this.props.createPacient(data);

      Alerts.success({
        onOk: () => {
          form.resetFields();
          this.props.onSubmitSuccess();
        }
      });
    } catch (error) {
      Alerts.error();
    }
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((error, values) => {
      if (!error) {
        this.saveFormData(values);
      }
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <PacientModalForm
          wrappedComponentRef={this.saveFormRef}
          onCreate={this.handleCreate}
          visible={this.props.visible}
          onCancel={this.props.onCancel}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PacientModalFormContainer);
