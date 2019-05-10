// @flow

import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';

import * as WebAPI from '../../utils/api.service';
import { SpecialtyModalForm } from '../../components/Specialty';
import {
  createSpecialty,
  hideSpecialtyModal,
  updateSpecialty,
  clearSpecialty
} from '../../pages/Specialty/specialty.actions';

const mapStateToProps = ({ specialties }) => ({
  specialties : _.values(specialties.specialties),
  specialty   : specialties.specialty,
  visible     : specialties.showSpecialtyModal
});

const mapDispatchToProps = {
  createSpecialty,
  hideSpecialtyModal,
  updateSpecialty,
  clearSpecialty
};

type Props = {
  visible: boolean,
  specialty: Object,
  createSpecialty: Function,
  updateSpecialty: Function,
  hideSpecialtyModal: Function,
  clearSpecialty: Function
};

class SpecialtyModalContainer extends React.Component<Props> {
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
      const { id } = this.props.specialty;
      const promise = id ? WebAPI.updateSpecialty(id, values) : WebAPI.createSpecialty(values);

      const { data: specialty } = await promise;
      const { form } = this.formRef.props;

      if (id) {
        this.props.updateSpecialty(specialty);
      } else {
        this.props.createSpecialty(specialty);
      }

      form.resetFields();

      this.setConfirmLoading(false);
      this.props.clearSpecialty();
      this.props.hideSpecialtyModal();
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
    this.props.hideSpecialtyModal();
    this.props.clearSpecialty();
  };

  handleSaveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <SpecialtyModalForm
          wrappedComponentRef={this.handleSaveFormRef}
          onCreate={this.handleOnCreate}
          onCancel={this.handleOnCancel}
          visible={this.props.visible}
          confirmLoading={this.state.confirmLoading}
          specialty={this.props.specialty}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialtyModalContainer);
