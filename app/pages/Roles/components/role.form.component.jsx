import React from 'react';
import _ from 'lodash';
import {
  compose,
  withHandlers,
  defaultProps,
  withState,
  lifecycle,
} from 'recompose';
import {
  Form, Button, Divider, Table,
} from 'antd';

import {
  getDefaultPermissions,
  LABELS,
  tableColumns,
} from './role.form.constants';

import { getDecoratorManager } from './role.form.decorators';
import * as entries from './role.form.entries';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT,
} from '../../../components/forms';

const FormItem = Form.Item;

const handleSubmit = props => e => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      const role = {
        ...values,
        permissions: props.permissions,
      };

      props.onSubmitHandler(role, props.form);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit });

const withPermissions = withState(
  'permissions',
  'setPermissions',
  getDefaultPermissions()
);

const withLifecycle = lifecycle({
  componentDidMount() {
    const { permissions } = this.props.role;
    if (permissions) {
      const items = _.values(permissions);
      this.props.setPermissions(items);
    }
  },
});

const RoleForm = props => {
  const { role } = props;
  const { getFieldDecorator } = props.form;

  const decoratorManager = getDecoratorManager(getFieldDecorator, role);

  return (
    <div>
      <Divider orientation="left">
        <h2>Cadastrar Perfil de Usuário</h2>
      </Divider>
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={props.handleSubmit}>
        <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.USER_ROLE} hasFeedback>
          {decoratorManager.roleNameDecorator(entries.getRoleNameField())}
        </FormItem>

        <Table
          size="middle"
          columns={tableColumns}
          dataSource={props.permissions}
          rowKey={it => it.resource_name}
          pagination={{ pageSize: 20 }}
        />

        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Salvar
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

const RoleFormComponent = compose(
  defaultProps({
    role: {},
    permissions: [],
  }),
  withPermissions,
  withFormHandlers,
  withLifecycle
)(RoleForm);

export default Form.create()(RoleFormComponent);
