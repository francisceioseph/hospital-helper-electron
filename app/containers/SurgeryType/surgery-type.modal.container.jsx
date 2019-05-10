// @flow

import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';

import * as WebAPI from '../../utils/api.service';
import { SurgeryTypeModal } from '../../components/SurgeryType';
import {
  createSurgeryType,
  hideSurgeryTypeModal,
  updateSurgeryType,
  clearSurgeryType
} from '../../pages/SurgeryTypes/surgery-types.actions';

const mapStateToProps = ({ surgeryTypes }) => ({
  surgeryTypes : _.values(surgeryTypes.surgeryTypes),
  surgeryType  : surgeryTypes.surgeryType,
  visible      : surgeryTypes.showSurgeryTypeModal
});

const mapDispatchToProps = {
  createSurgeryType,
  hideSurgeryTypeModal,
  updateSurgeryType,
  clearSurgeryType
};

type Props = {
  visible: boolean,
  surgeryType: Object,
  createSurgeryType: Function,
  updateSurgeryType: Function,
  hideSurgeryTypeModal: Function,
  clearSurgeryType: Function
};

class SurgeryTypeModalContainer extends React.Component<Props> {
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
      const { id } = this.props.surgeryType;
      const promise = id ? WebAPI.updateSurgeryType(id, values) : WebAPI.createSurgeryType(values);

      const { data: surgeryType } = await promise;
      const { form } = this.formRef.props;

      if (id) {
        this.props.updateSurgeryType(surgeryType);
      } else {
        this.props.createSurgeryType(surgeryType);
      }

      form.resetFields();

      this.setConfirmLoading(false);
      this.props.clearSurgeryType();
      this.props.hideSurgeryTypeModal();
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
    this.props.hideSurgeryTypeModal();
    this.props.clearSurgeryType();
  };

  handleSaveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    console.log(this.props.surgeryType);
    return (
      <div>
        <SurgeryTypeModal
          wrappedComponentRef={this.handleSaveFormRef}
          onCreate={this.handleOnCreate}
          onCancel={this.handleOnCancel}
          visible={this.props.visible}
          confirmLoading={this.state.confirmLoading}
          surgeryType={this.props.surgeryType}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryTypeModalContainer);
