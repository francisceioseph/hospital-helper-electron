import React from 'react';

import { Form, Button, Divider } from 'antd';
import { compose, withHandlers, defaultProps } from 'recompose';
import { getDecoratorManager } from './pacient.form.decorator';
import { LABELS } from './pacient.form.constants';

import * as entries from './pacient.form.entries';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT
} from '../../../components/forms';

const FormItem = Form.Item;

const handleSubmit = props => e => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values, props.form);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit });

const PacientForm = props => {
  const { pacient } = props;
  const { getFieldDecorator } = props.form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, pacient);

  return (
    <div>
      <Divider orientation="left">
        <h2>Cadastrar Paciente</h2>
      </Divider>
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={props.handleSubmit}>
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label={LABELS.NOME_COMPLETO}
          hasFeedback
        >
          {decoratorManager.fullNameDecorator(entries.getFullNameField())}
        </FormItem>

        <FormItem label={LABELS.CPF} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.cpfDecorator(entries.getCpfField())}
        </FormItem>

        <FormItem label={LABELS.CNS} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.cnsDecorator(entries.getCnsField())}
        </FormItem>

        <FormItem label={LABELS.MOTHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.motherNameDecorator(entries.getMotherNameField())}
        </FormItem>

        <FormItem label={LABELS.GENDER} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.genderDecorator(entries.getGenderField())}
        </FormItem>

        <FormItem label={LABELS.BIRTH_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.birthDateDecorator(entries.getBirthDateField())}
        </FormItem>

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

const PacientFormComponent = compose(
  defaultProps({
    pacient: {
      gender: 'male'
    }
  }),
  withFormHandlers
)(PacientForm);

export default Form.create()(PacientFormComponent);
