import React from 'react';

import { Form, Button } from 'antd';
import { compose, withHandlers, defaultProps } from 'recompose';
import { getDecoratorManager } from './pacient.form.decorator';

import IdentificationFragment from './form-sections/identification-section';
import DemographicsFragment from './form-sections/demographycs-section';
import ContactsFragment from './form-sections/contacts-section';

import { HORIZONTAL_FORM_LAYOUT, FORM_ITEM_SUBMIT_LAYOUT } from '../../../components/forms';

const FormItem = Form.Item;

const handleSubmit = props => (e) => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values, props.form);
    }
  });
};

const handleOnTabClick = props => (tabIndex) => {
  props.setCurrentTab(parseInt(tabIndex, 10));
};

const handleNextButtonClick = props => (event) => {
  event.stopPropagation();
  props.setCurrentTab(props.currentTab + 1);
};
const handlePrevButtonClick = props => (event) => {
  event.stopPropagation();
  props.setCurrentTab(props.currentTab - 1);
};

const withFormHandlers = withHandlers({
  handleSubmit,
  handleNextButtonClick,
  handlePrevButtonClick,
  handleOnTabClick
});

const PacientForm = (props) => {
  const { pacient, form } = props;
  const { getFieldDecorator } = form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, pacient);

  return (
    <div>
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={props.handleSubmit}>
        <IdentificationFragment {...props} decoratorManager={decoratorManager} />
        <DemographicsFragment {...props} decoratorManager={decoratorManager} />
        <ContactsFragment {...props} decoratorManager={decoratorManager} />
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
      profile: {
        gender: 'male'
      }
    }
  }),
  withFormHandlers
)(PacientForm);

export default Form.create()(PacientFormComponent);
