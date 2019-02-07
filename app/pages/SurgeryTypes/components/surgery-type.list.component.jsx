import React from 'react';
import PropTypes from 'prop-types';

import {
  compose, lifecycle, withState, withHandlers
} from 'recompose';
import {
  Row, Input, Divider, Table, Button, Col
} from 'antd';

import * as WebAPI from '../../../utils/api.service';

import { tableColumns } from './surgery-type.list.constants';
import SurgeryTypeModal from './surgery-type.modal.component';
import * as Alert from '../../../components/Alerts';

const SurgeryTypeList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search onSearch={props.onSearch} placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button type="primary" onClick={props.showModal}>
          Novo Tipo de Cirurgia
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.surgeryTypes}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    <div>
      <SurgeryTypeModal
        wrappedComponentRef={props.handleSaveFormRef}
        visible={props.visible}
        confirmLoading={props.confirmLoading}
        onCancel={props.handleCancel}
        onCreate={props.handleCreate}
      />
    </div>
  </div>
);

SurgeryTypeList.propTypes = {
  onSearch          : PropTypes.func.isRequired,
  showModal         : PropTypes.func.isRequired,
  handleSaveFormRef : PropTypes.func.isRequired,
  handleCancel      : PropTypes.func.isRequired,
  handleCreate      : PropTypes.func.isRequired,
  surgeryTypes      : PropTypes.instanceOf(Array).isRequired,
  visible           : PropTypes.bool.isRequired,
  confirmLoading    : PropTypes.bool.isRequired
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

    WebAPI.createSurgeryType(values)
      .then((response) => {
        const surgeryType = response.data;
        props.createSurgeryType(surgeryType);

        form.resetFields();
        props.setConfirmLoading(false);
        props.setVisible(false);
      })
      .catch(() => {
        props.setConfirmLoading(false);
      });
  });
};

const handleOnSearch = props => text => props.filterByName(text);

const withListHandlers = withHandlers({
  showModal,
  handleCancel,
  handleCreate,
  handleSaveFormRef,
  onSearch: handleOnSearch
});

const withListLifecycle = lifecycle({
  async componentDidMount() {
    try {
      this.props.showPageLoader();
      const response = await WebAPI.getSurgeryTypes();
      this.props.getSurgeryTypes(response);
      this.props.hidePageLoader();
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();

      Alert.error({
        content: 'Aconteceu um erro no carregamento. Tente mais tarde!'
      });
    }
  }
});

export default compose(
  withLoading,
  withFormRef,
  withVisibleState,
  withListHandlers,
  withListLifecycle
)(SurgeryTypeList);
