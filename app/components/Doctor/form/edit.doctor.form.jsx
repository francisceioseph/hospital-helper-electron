// @flow

import * as React from 'react';
import { Form, Button, Divider } from 'antd';

import * as entries from './doctor.form.entries';
import { getDecoratorManager } from './edit.doctor.form.decorator';
import { LABELS } from './doctor.form.constants';
import { HORIZONTAL_FORM_LAYOUT, FORM_ITEM_LAYOUT, FORM_ITEM_SUBMIT_LAYOUT } from '../../forms';

type Props = {
  doctor: Object,
  form: Object,
  getFieldDecorator: Function,
  handleSubmit: Function,
  showSubmit: boolean,
  mode: String
};

const FormItem = Form.Item;

const EditDoctorFormComponent = (props: Props) => {
  const { doctor, form } = props;
  const { getFieldDecorator } = form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, doctor);

  return (
    <div>
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={props.handleSubmit}>
        <Divider orientation="left">Dados Pessoais</Divider>
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

        {props.showSubmit && (
          <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Salvar
            </Button>
          </FormItem>
        )}
      </Form>
    </div>
  );
};

export default EditDoctorFormComponent;
