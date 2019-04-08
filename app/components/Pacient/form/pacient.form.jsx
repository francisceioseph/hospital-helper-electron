// @flow
import * as React from 'react';
import { Form, Button } from 'antd';

import { getDecoratorManager } from './pacient.form.decorator';
import { HORIZONTAL_FORM_LAYOUT, FORM_ITEM_SUBMIT_LAYOUT } from '../../forms';
import { IdentificationFragment, DemographicsFragment, ContactsFragment } from '../sections';

type Props = {
  pacient: Object,
  form: Object,
  showSubmit: boolean,
  handleSubmit: Function
};

const FormItem = Form.Item;

const PacientForm = (props: Props) => {
  const { pacient, form } = props;
  const { getFieldDecorator } = form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, pacient);

  return (
    <div>
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={props.handleSubmit}>
        <IdentificationFragment {...props} decoratorManager={decoratorManager} />
        <DemographicsFragment {...props} decoratorManager={decoratorManager} />
        <ContactsFragment {...props} decoratorManager={decoratorManager} />
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

export default PacientForm;
