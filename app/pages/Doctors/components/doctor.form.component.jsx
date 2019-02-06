import React from 'react';

import {
  Form, Button, Divider, Collapse
} from 'antd';
import { compose, withHandlers, defaultProps } from 'recompose';
import { getDecoratorManager } from './doctor.form.decorator';
import { LABELS } from './doctor.form.constants';

import * as entries from './doctor.form.entries';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT
} from '../../../components/forms';

const FormItem = Form.Item;
const { Panel } = Collapse;

const handleSubmit = props => (e) => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values, props.form);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit });

const PacientForm = (props) => {
  const { pacient, form } = props;
  const { getFieldDecorator } = form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, pacient);

  return (
    <div>
      <Divider orientation="left">
        <h2>Cadastrar Médico</h2>
      </Divider>
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={props.handleSubmit}>
        <Collapse defaultActiveKey="personal-data">
          <Panel header="Dados Pessoais" key="personal-data">
            <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.NOME_COMPLETO} hasFeedback>
              {decoratorManager.fullNameDecorator(entries.getFullNameField())}
            </FormItem>

            <FormItem label={LABELS.CPF} {...FORM_ITEM_LAYOUT} hasFeedback>
              {decoratorManager.cpfDecorator(entries.getCpfField())}
            </FormItem>

            <FormItem label={LABELS.CRM} {...FORM_ITEM_LAYOUT} hasFeedback>
              {decoratorManager.crmDecorator(entries.getCrmField())}
            </FormItem>

            <FormItem label={LABELS.GENDER} {...FORM_ITEM_LAYOUT} hasFeedback>
              {decoratorManager.genderDecorator(entries.getGenderField())}
            </FormItem>

            <FormItem label={LABELS.BIRTH_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
              {decoratorManager.birthDateDecorator(entries.getBirthDateField())}
            </FormItem>
          </Panel>

          <Panel header="Dados de Usuário" key="user-data">
            <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.EMAIL} hasFeedback>
              {decoratorManager.emailDecorator(entries.getEmailField())}
            </FormItem>

            <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.PASSWORD} hasFeedback>
              {decoratorManager.passwordDecorator(entries.getPasswordField())}
            </FormItem>

            <FormItem {...FORM_ITEM_LAYOUT} label={LABELS.PASSWORD_CONFIRMATION} hasFeedback>
              {decoratorManager.passwordConfirmationDecorator(entries.getPasswordField())}
            </FormItem>
          </Panel>
        </Collapse>
        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Salvar
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

const PacientFormComponent = compose(
  defaultProps({
    pacient: {
      gender: 'male'
    }
  }),
  withFormHandlers
)(PacientForm);

export default Form.create()(PacientFormComponent);
