// @flow
import * as React from 'react';

import { connect } from 'react-redux';

import * as Alerts from '../../../components/Alerts';
import * as ipcService from '../../../utils/ipc.service';

import { DoctorModalForm } from '../../../components/Doctor';
import { Doctor } from '../../../models/doctor.model';
import { createDoctor, updateDoctor } from '../../../pages/Doctors/doctors.actions';
import { showPageLoader, hidePageLoader } from '../../layouts/actions';


const mapStateToProps = ({ doctors }) => ({
  doctor: doctors.doctor
});

const mapDispatchToProps = {
  createDoctor,
  updateDoctor,
  showPageLoader,
  hidePageLoader,
};

type Props = {
  doctor: Object,
  createDoctor: Function,
  updateDoctor: Function,
  showPageLoader: Function,
  hidePageLoader: Function,
  visible: boolean,
  onCancel: Function,
  onSubmitSuccess: Function,
  mode?: string,
  titleText?: string
};

class DoctorModalFormContainer extends React.Component<Props> {
  saveFormData = async (values) => {
    const form = this.formRef;
    this.props.showPageLoader();

    try {
      const doctor = Doctor.buildForAPI(values, this.props.doctor);

      if (this.props.mode !== 'edit') {
        const { data } = await ipcService.createDoctor(doctor);
        this.props.createDoctor(data);
      } else {
        const { data } = await ipcService.updateDoctor(doctor.id, doctor);
        this.props.updateDoctor(data);
      }

      this.props.hidePageLoader();
      Alerts.success({
        onOk: () => {
          form.resetFields();
          this.props.onSubmitSuccess();
        }
      });
    } catch (error) {
      this.props.hidePageLoader();
      Alerts.error();
    }
  };

  handleCreate = () => {
    const form = this.formRef;
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
        <DoctorModalForm
          titleText={this.props.titleText}
          doctor={this.props.doctor}
          ref={this.saveFormRef}
          onCreate={this.handleCreate}
          visible={this.props.visible}
          onCancel={this.props.onCancel}
          mode={this.props.mode}
        />
      </div>
    );
  }
}

DoctorModalFormContainer.defaultProps = {
  mode      : 'new',
  titleText : 'Cadastrar Médico'
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true }
)(DoctorModalFormContainer);
