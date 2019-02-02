import React from 'react';
import PropTypes from 'prop-types';

import {
  compose, lifecycle, withState, withHandlers,
} from 'recompose';
import {
  Row, Input, Divider, Table, Button, Col,
} from 'antd';

import * as WebAPI from '../../../utils/webAPI';

import { tableColumns } from './appointment-type.list.constants';
import AppointmentTypeModal from './appointment-type.modal.component';

const AppointmentTypeList = props => (
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
          Novo Tipo de Atendimento
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.appointmentTypes}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    <div>
      <AppointmentTypeModal
        wrappedComponentRef={props.handleSaveFormRef}
        visible={props.visible}
        confirmLoading={props.confirmLoading}
        onCancel={props.handleCancel}
        onCreate={props.handleCreate}
      />
    </div>
  </div>
);

AppointmentTypeList.propTypes = {
  onSearch: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  handleSaveFormRef: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  appointmentTypes: PropTypes.instanceOf(Array).isRequired,
  visible: PropTypes.bool.isRequired,
  confirmLoading: PropTypes.bool.isRequired,
};

const withVisibleState = withState('visible', 'setVisible', false);
const withFormRef = withState('formRef', 'setFormRef', null);
const withLoading = withState('confirmLoading', 'setConfirmLoading', false);

const showModal = props => () => props.setVisible(true);
const handleCancel = props => () => props.setVisible(false);
const handleSaveFormRef = props => formRef => props.setFormRef(formRef);
const handleCreate = props => () => {
  const { form } = props.formRef.props;
  props.setConfirmLoading(true);

  form.validateFields((err, values) => {
    if (err) {
      props.setConfirmLoading(false);
      return;
    }

    WebAPI.createAppointmentType(values)
      .then(response => {
        const appointmentType = response.data;
        props.createAppointmentType(appointmentType);

        form.resetFields();
        props.setConfirmLoading(false);
        props.setVisible(false);
      })
      .catch(() => {
        props.setConfirmLoading(false);
      });
  });
};

const withListHandlers = withHandlers({
  showModal,
  handleCancel,
  handleCreate,
  handleSaveFormRef,
  onSearch: () => () => {},
});

const withListLifecycle = lifecycle({
  componentDidMount() {
    this.props.getAppointmentTypes();
  },
});

export default compose(
  withLoading,
  withFormRef,
  withVisibleState,
  withListHandlers,
  withListLifecycle
)(AppointmentTypeList);
