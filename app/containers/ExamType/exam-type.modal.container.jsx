// @flow

import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';

import * as WebAPI from '../../utils/api.service';
import { ExamTypeModal } from '../../components/ExamType';
import {
  createExamType,
  hideExamTypeModal,
  updateExamType,
  clearExamType
} from '../../pages/ExamTypes/exam-types.actions';

const mapStateToProps = ({ examTypes }) => ({
  examTypes : _.values(examTypes.examTypes),
  examType  : examTypes.examType,
  visible   : examTypes.showExamTypeModal
});

const mapDispatchToProps = {
  createExamType,
  hideExamTypeModal,
  updateExamType,
  clearExamType
};

type Props = {
  visible: boolean,
  examType: Object,
  createExamType: Function,
  updateExamType: Function,
  hideExamTypeModal: Function,
  clearExamType: Function
};

class ExamTypeModalContainer extends React.Component<Props> {
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
      const { id } = this.props.examType;
      const promise = id ? WebAPI.updateExamType(id, values) : WebAPI.createExamType(values);

      const { data: examType } = await promise;
      const { form } = this.formRef.props;

      if (id) {
        this.props.updateExamType(examType);
      } else {
        this.props.createExamType(examType);
      }

      form.resetFields();

      this.setConfirmLoading(false);
      this.props.clearExamType();
      this.props.hideExamTypeModal();
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
    this.props.hideExamTypeModal();
    this.props.clearExamType();
  };

  handleSaveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <ExamTypeModal
          wrappedComponentRef={this.handleSaveFormRef}
          onCreate={this.handleOnCreate}
          onCancel={this.handleOnCancel}
          visible={this.props.visible}
          confirmLoading={this.state.confirmLoading}
          examType={this.props.examType}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamTypeModalContainer);
