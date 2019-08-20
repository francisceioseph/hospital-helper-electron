// @flow

import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';

import * as ipcService from '../../utils/ipc.service';
import { AppointmentTypeModal } from '../../components/AppointmentType';
import {
  createAppointmentType,
  hideAppointmentTypeModal,
  updateAppointmentType,
  clearAppointmentType
} from '../../pages/AppointmentTypes/appointment-types.actions';

const mapStateToProps = ({ appointmentTypes }) => ({
  appointmentTypes : _.values(appointmentTypes.appointmentTypes),
  appointmentType  : appointmentTypes.appointmentType,
  visible          : appointmentTypes.showAppointmentTypeModal
});

const mapDispatchToProps = {
  createAppointmentType,
  hideAppointmentTypeModal,
  updateAppointmentType,
  clearAppointmentType
};

type Props = {
  visible: boolean,
  appointmentType: Object,
  createAppointmentType: Function,
  updateAppointmentType: Function,
  hideAppointmentTypeModal: Function,
  clearAppointmentType: Function
};

class AppointmentTypeModalContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      confirmLoading: false
    };
  }

  setConfirmLoading = (isLoading: boolean) => {
    this.setState({ confirmLoading: isLoading });
  };

  saveFormData = async (values) => {
    try {
      const { id } = this.props.appointmentType;
      const promise = id ? ipcService.updateAppointmentType(id, values) : ipcService.createAppointmentType(values);

      const { data: appointmentType } = await promise;
      const { form } = this.formRef.props;

      if (id) {
        this.props.updateAppointmentType(appointmentType);
      } else {
        this.props.createAppointmentType(appointmentType);
      }

      form.resetFields();

      this.setConfirmLoading(false);
      this.props.clearAppointmentType();
      this.props.hideAppointmentTypeModal();
    } catch (error) {
      this.setConfirmLoading(false);
    }
  };

  handleOnCreate = () => {
    const { form } = this.formRef.props;
    this.setConfirmLoading(true);

    form.validateFields((err, values) => {
      if (err) {
        this.setConfirmLoading(false);
      }

      this.saveFormData(values);
    });
  };

  handleOnCancel = () => {
    this.props.hideAppointmentTypeModal();
    this.props.clearAppointmentType();
  };

  handleSaveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <AppointmentTypeModal
          wrappedComponentRef={this.handleSaveFormRef}
          onCreate={this.handleOnCreate}
          onCancel={this.handleOnCancel}
          visible={this.props.visible}
          confirmLoading={this.state.confirmLoading}
          appointmentType={this.props.appointmentType}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentTypeModalContainer);
