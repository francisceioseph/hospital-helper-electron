import React from 'react';

import {
 compose, lifecycle, withState, withHandlers 
} from 'recompose';
import {
 Row, Input, Divider, Table, Button, Col 
} from 'antd';

import * as WebAPI from '../../../utils/webAPI';

import { tableColumns } from './specialty.list.constants';
import SpecialtyModal from './specialty.modal.component';

const SpecialtyComponent = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search
          onSearch={props.onSearch}
          placeholder="Pesquisar"
          style={{ width: 200 }}
        />
      </Col>
      <Col>
        <Button type="primary" onClick={props.showModal}>
            Nova Especialidade
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.specialties}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    <div>
      <SpecialtyModal
        wrappedComponentRef={props.handleSaveFormRef}
        visible={props.visible}
        confirmLoading={props.confirmLoading}
        onCancel={props.handleCancel}
        onCreate={props.handleCreate}
      />
    </div>
  </div>
);

const withVisibleState = withState('visible', 'setVisible', false);
const withFormRef = withState('formRef', 'setFormRef', null);
const withLoading = withState('confirmLoading', 'setConfirmLoading', false);

const showModal = props => () => props.setVisible(true);
const handleCancel = props => () => props.setVisible(false);
const handleSaveFormRef = props => formRef => props.setFormRef(formRef);
const handleCreate = props => () => {
  const form = props.formRef.props.form;
  props.setConfirmLoading(true);

  form.validateFields((err, values) => {
    if (err) {
      props.setConfirmLoading(false);
      return;
    }

    WebAPI.createSpecialty(values)
      .then((response) => {
        const specialty = response.data;
        props.createSpecialty(specialty);

        form.resetFields();
        props.setConfirmLoading(false);
        props.setVisible(false);
      })
      .catch((error) => {
        props.setConfirmLoading(false);
      });
  });
};

const withListHandlers = withHandlers({
  showModal,
  handleCancel,
  handleCreate,
  handleSaveFormRef
});

const specialtyListLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await WebAPI.getSpecialties();
      this.props.getSpecialties(response);
      this.props.hidePageLoader();  
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withLoading,
  withFormRef,
  withVisibleState,
  withListHandlers,
  specialtyListLifecycle
)(SpecialtyComponent);
