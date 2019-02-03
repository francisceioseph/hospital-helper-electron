import React from 'react';

import {
  Form, Button, Divider, Tabs
} from 'antd';
import {
  compose, withHandlers, defaultProps, withState
} from 'recompose';
import { getDecoratorManager } from './pacient.form.decorator';
import { LABELS } from './pacient.form.constants';

import IdentificationFragment from './form-sections/identification-section';
import DemographicsFragment from './form-sections/demographycs-section';
import ContactsFragment from './form-sections/contacts-section';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT
} from '../../../components/forms';

const FormItem = Form.Item;
const { TabPane } = Tabs;

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
  handleOnTabClick,
});

const withCurrentTab = withState('currentTab', 'setCurrentTab', 1);

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
        <Tabs
          defaultActiveKey="1"
          activeKey={props.currentTab.toString()}
          onTabClick={props.handleOnTabClick}
          onNextClick={props.handleNextButtonClick}
          onPrevClick={props.handlePrevButtonClick}
        >
          <TabPane tab="Informações Pessoais" key="1">
            <IdentificationFragment {...props} decoratorManager={decoratorManager} />
          </TabPane>
          <TabPane tab="Informações Sócio-Econômicas" key="2">
            <DemographicsFragment {...props} decoratorManager={decoratorManager} />
          </TabPane>
          <TabPane tab="Contatos" key="3">
            <ContactsFragment {...props} decoratorManager={decoratorManager} />
          </TabPane>
        </Tabs>

        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          {props.currentTab !== 3 && (
            <Button
              type="primary"
              className="login-form-button"
              onClick={props.handleNextButtonClick}
            >
            Próximo
            </Button>
          )}
          {props.currentTab === 3 && (
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
            Salvar
            </Button>
          )}
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
  withCurrentTab,
  withFormHandlers
)(PacientForm);

export default Form.create()(PacientFormComponent);
