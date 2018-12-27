import React from 'react';

import { Form, Button, Divider, Collapse } from 'antd';
import { compose, withHandlers, defaultProps } from 'recompose';
import { getDecoratorManager } from './pacient.form.decorator';
import { LABELS } from './pacient.form.constants';

import IdentificationFragment from './form-sections/identification-section';
import DemographicsFragment from './form-sections/demographycs-section';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT
} from '../../../components/forms';

const FormItem = Form.Item;

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
  const { pacient } = props;
  const { getFieldDecorator } = props.form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, pacient);

  return (
    <div>
      <Divider orientation="left">
        <h2>Cadastrar Paciente</h2>
      </Divider>
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={props.handleSubmit}>
        <Collapse defaultActiveKey="personal-info">
          <Collapse.Panel header="Informações Pessoais" key="personal-info">
            <IdentificationFragment {...props} decoratorManager={decoratorManager}/>
          </Collapse.Panel>
          <Collapse.Panel header="Informações Sócio-Econômicas" key="demographics">
            <DemographicsFragment {...props} decoratorManager={decoratorManager}/>
          </Collapse.Panel>
        </Collapse>

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
      profile: {
        gender: 'male'
      }
    }
  }),
  withFormHandlers
)(PacientForm);

export default Form.create()(PacientFormComponent);
