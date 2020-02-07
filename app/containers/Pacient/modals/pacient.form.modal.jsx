// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import * as Alerts from '../../../components/Alerts';
import * as ipcService from '../../../utils/ipc.service';

import { Pacient } from '../../../models/pacient.model';
import { PacientModalForm } from '../../../components/Pacient';
import { showPageLoader, hidePageLoader } from '../../layouts/actions';
import { createPacient, updatePacient, clearSelectedPacient } from '../../../pages/Pacient/pacient.actions';

type Props = {
  pacient: Object,
  createPacient: Function,
  updatePacient: Function,
  showPageLoader: Function,
  hidePageLoader: Function,
  clearSelectedPacient: Function,
  visible: boolean,
  onCancel: Function,
  onSubmitSuccess: Function,
  mode?: string,
  titleText?: string
};

const mapStateToProps = ({ pacients }) => ({
  pacient: pacients.pacient
});

const mapDispatchToProps = {
  createPacient,
  updatePacient,
  clearSelectedPacient,
  showPageLoader,
  hidePageLoader
};

class PacientModalFormContainer extends React.Component<Props> {
  saveFormData = async (values) => {
    this.props.showPageLoader();
    const { form } = this;

    try {
      const pacient = Pacient.buildForAPI(values, this.props.pacient);

      console.log(pacient);

      if (this.props.mode !== 'edit') {
        const { data } = await ipcService.postPacient(pacient);
        this.props.createPacient(data);
      } else {
        const { data } = await ipcService.updatePacient(pacient.id, pacient);
        this.props.updatePacient(data);
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
    const { form } = this;
    form.validateFields((error, values) => {
      if (!error) {
        this.saveFormData(values);
        this.props.clearSelectedPacient();
      }
    });
  };

  saveFormRef = (form) => {
    this.form = form;
  };

  handleCancel = (event) => {
    this.props.onCancel(event);
    this.props.clearSelectedPacient();
  };

  render() {
    return (
      <div>
        <PacientModalForm
          titleText={this.props.titleText}
          pacient={this.props.pacient}
          ref={this.saveFormRef}
          onCreate={this.handleCreate}
          visible={this.props.visible}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

PacientModalFormContainer.defaultProps = {
  mode      : 'new',
  titleText : 'Cadastrar Paciente'
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true }
)(PacientModalFormContainer);
