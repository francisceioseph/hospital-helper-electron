// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import * as Alerts from '../../../components/Alerts';
import * as WebAPI from '../../../utils/api.service';

import { Pacient } from '../../../models/pacient.model';
import { PacientModalForm } from '../../../components/Pacient';
import { createPacient, updatePacient, clearSelectedPacient } from '../../../pages/Pacient/pacient.actions';

type Props = {
  pacient: Object,
  createPacient: Function,
  updatePacient: Function,
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
  clearSelectedPacient
};

class PacientModalFormContainer extends React.Component<Props> {
  saveFormData = async (values) => {
    const { form } = this.formRef.props;

    try {
      const pacient = Pacient.buildForAPI(values, this.props.pacient);

      if (this.props.mode !== 'edit') {
        const { data } = await WebAPI.postPacient(pacient);
        this.props.createPacient(data);
      } else {
        const { data } = await WebAPI.updatePacient(pacient.id, pacient);
        this.props.updatePacient(data);
      }

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
        this.props.clearSelectedPacient();
      }
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
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
          wrappedComponentRef={this.saveFormRef}
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
  mapDispatchToProps
)(PacientModalFormContainer);
